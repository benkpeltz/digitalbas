/**
 * digitalbas - Application State & Sequencer Logic
 */

let appState = {
      riteKey: 'eucharist',
      selectedDayKey: 'proper28',
      includeReading1: true,
      includePsalm: true,
      includePsalmPrayer: true,
      includeReading2: true,
      includeGospel: true,
      greeting: 'standard',
      includeCollectPurity: true,
      includeGloria: true,
      canticle: 'gloria',
      gospelAcclamation: 'alleluia',
      creed: 'nicene',
      prayers: 'litany1',
      eucharisticPrayer: 'prayer1',
      preface: 'auto',
      lordsPrayer: 'contemporary',
      fraction: 'fraction1',
      showRubrics: true,
      showInlineControls: true,
      fontSize: 'font-size-md',
      isFullServiceView: false,
      blocks: [],
      overrides: {},
      editingBlockId: null
    };

    document.addEventListener('DOMContentLoaded', () => {
      loadRiteSequence(appState.riteKey, false);
      initListeners();
      loadDayData(appState.selectedDayKey);
      renderAll();
    });

    function cloneBlocks(templateList) {
      return templateList.map(b => ({
        id: b.id,
        type: b.type,
        label: b.label || (b.customData ? b.customData.heading : 'Custom Element'),
        section: b.section || 'Liturgical Element',
        enabled: b.enabled,
        customData: b.customData ? Object.assign({}, b.customData) : null
      }));
    }

    function loadRiteSequence(riteKey, applyRiteDefaults = true) {
      appState.riteKey = riteKey;
      appState.blocks = cloneBlocks(RITE_SEQUENCES[riteKey] || RITE_SEQUENCES.eucharist);

      if (applyRiteDefaults) {
        if (riteKey === 'lenten_eucharist') {
          appState.greeting = 'lent';
          appState.canticle = 'kyrie';
          appState.gospelAcclamation = 'lenten';
          appState.fraction = 'fraction5';
        } else if (riteKey === 'morning_prayer') {
          appState.greeting = 'morning_office';
          appState.canticle = 'venite';
          appState.gospelAcclamation = 'benedictus';
          appState.creed = 'shema';
        } else if (riteKey === 'evening_prayer') {
          appState.greeting = 'evening_office';
          appState.canticle = 'phos_hilaron';
          appState.gospelAcclamation = 'magnificat';
          appState.creed = 'shema';
        } else if (riteKey === 'word_lay') {
          appState.greeting = 'standard';
          appState.canticle = 'gloria';
          appState.creed = 'apostles';
        } else {
          appState.greeting = 'standard';
          appState.canticle = 'gloria';
          appState.gospelAcclamation = 'alleluia';
          appState.creed = 'nicene';
        }
        syncFormSelectsFromState();
      }
      syncBlockCheckboxesFromBlocks();
    }

    function syncFormSelectsFromState() {
      document.getElementById('greetingSelect').value = appState.greeting;
      document.getElementById('canticleSelect').value = appState.canticle;
      document.getElementById('gospelAcclamationSelect').value = appState.gospelAcclamation;
      document.getElementById('creedSelect').value = appState.creed;
      document.getElementById('prayersSelect').value = appState.prayers;
      document.getElementById('eucharisticPrayerSelect').value = appState.eucharisticPrayer;
      document.getElementById('prefaceSelect').value = appState.preface;
      document.getElementById('lordsPrayerSelect').value = appState.lordsPrayer;
      document.getElementById('fractionSelect').value = appState.fraction;
    }

    function syncBlockCheckboxesFromBlocks() {
      const getEn = (id) => {
        const b = appState.blocks.find(x => x.id === id);
        return b ? b.enabled : false;
      };
      appState.includeReading1 = getEn('reading1');
      appState.includePsalm = getEn('psalm');
      appState.includeReading2 = getEn('reading2');
      appState.includeGospel = getEn('gradual_gospel');
      appState.includeCollectPurity = getEn('collect_purity');
      appState.includeGloria = getEn('canticle_praise');

      document.getElementById('includeReading1').checked = appState.includeReading1;
      document.getElementById('includePsalm').checked = appState.includePsalm;
      document.getElementById('includeReading2').checked = appState.includeReading2;
      document.getElementById('includeGospel').checked = appState.includeGospel;
      document.getElementById('includeCollectPurity').checked = appState.includeCollectPurity;
      document.getElementById('includeGloria').checked = appState.includeGloria;
    }

    function setBlockEnabled(blockId, isEnabled) {
      const b = appState.blocks.find(x => x.id === blockId);
      if (b) b.enabled = isEnabled;
      syncBlockCheckboxesFromBlocks();
    }

    function initListeners() {
      document.getElementById('ritePreset').addEventListener('change', (e) => {
        loadRiteSequence(e.target.value, true);
        renderAll();
        showToast('Updated service structure to ' + e.target.options[e.target.selectedIndex].text.split(' (')[0]);
      });

      document.getElementById('feastPreset').addEventListener('change', (e) => {
        appState.selectedDayKey = e.target.value;
        loadDayData(appState.selectedDayKey);
        renderAll();
      });

      document.getElementById('includeReading1').addEventListener('change', (e) => {
        setBlockEnabled('reading1', e.target.checked);
        renderAll();
      });
      document.getElementById('includePsalm').addEventListener('change', (e) => {
        setBlockEnabled('psalm', e.target.checked);
        renderAll();
      });
      document.getElementById('includePsalmPrayer').addEventListener('change', (e) => {
        appState.includePsalmPrayer = e.target.checked;
        renderService();
      });
      document.getElementById('includeReading2').addEventListener('change', (e) => {
        setBlockEnabled('reading2', e.target.checked);
        renderAll();
      });
      document.getElementById('includeGospel').addEventListener('change', (e) => {
        setBlockEnabled('gradual_gospel', e.target.checked);
        renderAll();
      });
      document.getElementById('includeCollectPurity').addEventListener('change', (e) => {
        setBlockEnabled('collect_purity', e.target.checked);
        renderAll();
      });
      document.getElementById('includeGloria').addEventListener('change', (e) => {
        setBlockEnabled('canticle_praise', e.target.checked);
        renderAll();
      });

      document.getElementById('greetingSelect').addEventListener('change', (e) => {
        appState.greeting = e.target.value;
        renderService();
      });
      document.getElementById('canticleSelect').addEventListener('change', (e) => {
        appState.canticle = e.target.value;
        renderService();
      });
      document.getElementById('gospelAcclamationSelect').addEventListener('change', (e) => {
        appState.gospelAcclamation = e.target.value;
        renderService();
      });
      document.getElementById('creedSelect').addEventListener('change', (e) => {
        appState.creed = e.target.value;
        setBlockEnabled('creed', e.target.value !== 'none');
        renderAll();
      });
      document.getElementById('prayersSelect').addEventListener('change', (e) => {
        appState.prayers = e.target.value;
        renderService();
      });
      document.getElementById('eucharisticPrayerSelect').addEventListener('change', (e) => {
        appState.eucharisticPrayer = e.target.value;
        renderService();
      });
      document.getElementById('prefaceSelect').addEventListener('change', (e) => {
        appState.preface = e.target.value;
        renderService();
      });
      document.getElementById('lordsPrayerSelect').addEventListener('change', (e) => {
        appState.lordsPrayer = e.target.value;
        renderService();
      });
      document.getElementById('fractionSelect').addEventListener('change', (e) => {
        appState.fraction = e.target.value;
        renderService();
      });

      document.getElementById('parishTitle').addEventListener('input', () => renderService());
      document.getElementById('serviceDateInput').addEventListener('input', () => renderService());

      setupEditToggle('toggleReading1Edit', 'reading1EditArea');
      setupEditToggle('togglePsalmEdit', 'psalmEditArea');
      setupEditToggle('toggleReading2Edit', 'reading2EditArea');
      setupEditToggle('toggleGospelEdit', 'gospelEditArea');
      setupEditToggle('togglePropersEdit', 'propersEditArea');

      document.getElementById('reading1Citation').addEventListener('input', (e) => {
        const cur = getCurrentDay();
        const selIdx = cur.readings.reading1.selectedTrack;
        cur.readings.reading1.tracks[selIdx].citation = e.target.value;
        renderService();
      });
      document.getElementById('reading1Text').addEventListener('input', (e) => {
        const cur = getCurrentDay();
        const selIdx = cur.readings.reading1.selectedTrack;
        cur.readings.reading1.tracks[selIdx].text = e.target.value;
        renderService();
      });

      document.getElementById('psalmCitation').addEventListener('input', (e) => {
        const cur = getCurrentDay();
        cur.readings.psalm.citation = e.target.value;
        document.getElementById('psalmCitationLabel').textContent = e.target.value;
        renderService();
      });
      document.getElementById('psalmText').addEventListener('input', (e) => {
        const cur = getCurrentDay();
        const lines = e.target.value.split('\n').filter(l => l.trim().length > 0);
        cur.readings.psalm.verses = lines.map(line => {
          const parts = line.split('/');
          return {
            leader: (parts[0] || '').trim(),
            people: (parts.slice(1).join('/') || '').trim()
          };
        });
        renderService();
      });

      document.getElementById('reading2Citation').addEventListener('input', (e) => {
        const cur = getCurrentDay();
        cur.readings.reading2.citation = e.target.value;
        document.getElementById('reading2CitationLabel').textContent = e.target.value;
        renderService();
      });
      document.getElementById('reading2Text').addEventListener('input', (e) => {
        const cur = getCurrentDay();
        cur.readings.reading2.text = e.target.value;
        renderService();
      });

      document.getElementById('gospelCitation').addEventListener('input', (e) => {
        const cur = getCurrentDay();
        cur.readings.gospel.citation = e.target.value;
        document.getElementById('gospelCitationLabel').textContent = e.target.value;
        renderService();
      });
      document.getElementById('gospelText').addEventListener('input', (e) => {
        const cur = getCurrentDay();
        cur.readings.gospel.text = e.target.value;
        renderService();
      });

      document.getElementById('collectInput').addEventListener('input', (e) => {
        getCurrentDay().collect = e.target.value;
        renderService();
      });
      document.getElementById('giftsPrayerInput').addEventListener('input', (e) => {
        getCurrentDay().prayerOverGifts = e.target.value;
        renderService();
      });
      document.getElementById('postCommunionInput').addEventListener('input', (e) => {
        getCurrentDay().prayerAfterCommunion = e.target.value;
        renderService();
      });

      document.getElementById('resetOrderBtn').addEventListener('click', () => {
        appState.overrides = {};
        loadRiteSequence(appState.riteKey, false);
        renderAll();
        showToast('Service sequence reset to Rite default.');
      });

      document.getElementById('openInsertModalBtn').addEventListener('click', () => {
        openBlockModal(null);
      });
      document.getElementById('closeModalBtn').addEventListener('click', closeBlockModal);
      document.getElementById('cancelModalBtn').addEventListener('click', closeBlockModal);
      document.getElementById('modalBlockCategory').addEventListener('change', (e) => {
        if (!appState.editingBlockId) {
          populateModalFromTemplate(e.target.value);
        }
      });
      document.getElementById('saveModalBtn').addEventListener('click', saveBlockFromModal);

      document.getElementById('toggleRubricsBtn').addEventListener('click', () => {
        appState.showRubrics = !appState.showRubrics;
        const statusEl = document.getElementById('rubricStatusText');
        statusEl.textContent = appState.showRubrics ? 'Visible' : 'Hidden';
        statusEl.className = appState.showRubrics ? 'font-semibold text-rubric' : 'font-semibold text-stone-500';
        renderService();
      });

      document.getElementById('toggleInlineControlsBtn').addEventListener('click', () => {
        appState.showInlineControls = !appState.showInlineControls;
        const statusEl = document.getElementById('inlineControlsStatusText');
        statusEl.textContent = appState.showInlineControls ? 'On' : 'Off';
        statusEl.className = appState.showInlineControls ? 'font-semibold text-amber-800' : 'font-semibold text-stone-500';
        renderService();
      });

      document.getElementById('fontSmBtn').addEventListener('click', () => setFontSize('font-size-sm'));
      document.getElementById('fontMdBtn').addEventListener('click', () => setFontSize('font-size-md'));
      document.getElementById('fontLgBtn').addEventListener('click', () => setFontSize('font-size-lg'));

      document.getElementById('viewToggleBtn').addEventListener('click', () => {
        appState.isFullServiceView = !appState.isFullServiceView;
        const sidebar = document.getElementById('builderSidebar');
        const serviceCol = document.getElementById('servicePreviewSection');
        const toggleText = document.getElementById('viewToggleText');

        if (appState.isFullServiceView) {
          sidebar.classList.add('hidden');
          serviceCol.classList.remove('lg:col-span-7');
          serviceCol.classList.add('lg:col-span-12', 'max-w-4xl', 'mx-auto');
          toggleText.textContent = 'Show Liturgy Builder';
        } else {
          sidebar.classList.remove('hidden');
          serviceCol.classList.remove('lg:col-span-12', 'max-w-4xl', 'mx-auto');
          serviceCol.classList.add('lg:col-span-7');
          toggleText.textContent = 'Full Service View';
        }
      });

      document.getElementById('printBtn').addEventListener('click', () => window.print());
      document.getElementById('copyLitBtn').addEventListener('click', copyLiturgyToClipboard);
      document.getElementById('exportJsonBtn').addEventListener('click', exportServiceJson);
    }

    function setupEditToggle(btnId, containerId) {
      document.getElementById(btnId).addEventListener('click', () => {
        document.getElementById(containerId).classList.toggle('hidden');
      });
    }

    function setFontSize(sizeClass) {
      appState.fontSize = sizeClass;
      const sheet = document.getElementById('serviceSheet');
      sheet.classList.remove('font-size-sm', 'font-size-md', 'font-size-lg', 'font-size-xl');
      sheet.classList.add(sizeClass);
    }

    function getCurrentDay() {
      return LECTIONARY_DATA[appState.selectedDayKey];
    }

    function loadDayData(key) {
      const day = LECTIONARY_DATA[key];
      const badge = document.getElementById('seasonBadge');
      badge.textContent = day.season;
      badge.className = `px-2 py-0.5 text-xs font-medium rounded-full border ${day.colorBadge}`;

      if (key === 'easter') appState.greeting = 'easter';
      else if (key === 'epiphany') appState.greeting = 'epiphany';
      else if (key === 'ash_wednesday' || key === 'good_friday') appState.greeting = 'lent';
      syncFormSelectsFromState();

      const r1List = document.getElementById('reading1OptionsList');
      r1List.innerHTML = '';
      day.readings.reading1.tracks.forEach((track, idx) => {
        const row = document.createElement('label');
        row.className = 'flex items-center space-x-2 text-xs text-stone-700 cursor-pointer p-1 rounded hover:bg-stone-200/50';
        row.innerHTML = `
          <input type="radio" name="reading1TrackRadio" value="${idx}" ${idx === day.readings.reading1.selectedTrack ? 'checked' : ''} class="text-amber-700 focus:ring-amber-600">
          <span class="font-medium">${track.label}</span>
        `;
        row.querySelector('input').addEventListener('change', (e) => {
          day.readings.reading1.selectedTrack = parseInt(e.target.value, 10);
          syncEditFields();
          renderService();
        });
        r1List.appendChild(row);
      });

      syncEditFields();
    }

    function syncEditFields() {
      const day = getCurrentDay();
      const r1Sel = day.readings.reading1.tracks[day.readings.reading1.selectedTrack];
      document.getElementById('reading1Citation').value = r1Sel.citation;
      document.getElementById('reading1Text').value = r1Sel.text;

      document.getElementById('psalmCitation').value = day.readings.psalm.citation;
      document.getElementById('psalmCitationLabel').textContent = day.readings.psalm.citation;
      document.getElementById('psalmText').value = day.readings.psalm.verses.map(v => `${v.leader} / ${v.people}`).join('\n');

      document.getElementById('reading2Citation').value = day.readings.reading2.citation;
      document.getElementById('reading2CitationLabel').textContent = day.readings.reading2.citation;
      document.getElementById('reading2Text').value = day.readings.reading2.text;

      document.getElementById('gospelCitation').value = day.readings.gospel.citation;
      document.getElementById('gospelCitationLabel').textContent = day.readings.gospel.citation;
      document.getElementById('gospelText').value = day.readings.gospel.text;

      document.getElementById('collectInput').value = day.collect || '';
      document.getElementById('giftsPrayerInput').value = day.prayerOverGifts || '';
      document.getElementById('postCommunionInput').value = day.prayerAfterCommunion || '';
    }

    function renderAll() {
      renderSequencerList();
      renderService();
    }

    function moveBlock(index, direction) {
      const targetIndex = index + direction;
      if (targetIndex < 0 || targetIndex >= appState.blocks.length) return;
      const temp = appState.blocks[index];
      appState.blocks[index] = appState.blocks[targetIndex];
      appState.blocks[targetIndex] = temp;
      renderAll();
    }

    function removeOrDisableBlock(index) {
      const blk = appState.blocks[index];
      if (!blk) return;
      if (blk.type === 'custom') {
        appState.blocks.splice(index, 1);
      } else {
        blk.enabled = false;
        syncBlockCheckboxesFromBlocks();
      }
      renderAll();
    }

    function renderSequencerList() {
      const container = document.getElementById('sequencerList');
      container.innerHTML = '';

      appState.blocks.forEach((blk, idx) => {
        const row = document.createElement('div');
        row.className = `flex items-center justify-between gap-2 px-2.5 py-1.5 rounded border text-xs transition ${
          blk.enabled ? 'bg-white border-stone-200 text-stone-800 shadow-sm' : 'bg-stone-100/70 border-stone-200/60 text-stone-400'
        }`;

        const left = document.createElement('div');
        left.className = 'flex items-center space-x-2 min-w-0 flex-1';

        const chk = document.createElement('input');
        chk.type = 'checkbox';
        chk.checked = blk.enabled;
        chk.className = 'rounded text-amber-700 focus:ring-amber-600 w-3.5 h-3.5 flex-shrink-0 cursor-pointer';
        chk.addEventListener('change', (e) => {
          blk.enabled = e.target.checked;
          syncBlockCheckboxesFromBlocks();
          renderAll();
        });

        const titleSpan = document.createElement('span');
        titleSpan.className = `truncate ${blk.enabled ? 'font-medium' : 'line-through'}`;
        titleSpan.textContent = `${idx + 1}. ${blk.customData ? blk.customData.heading : blk.label}`;

        left.appendChild(chk);
        left.appendChild(titleSpan);

        const actions = document.createElement('div');
        actions.className = 'flex items-center space-x-1 flex-shrink-0';

        const upBtn = document.createElement('button');
        upBtn.type = 'button';
        upBtn.className = 'px-1.5 py-0.5 rounded hover:bg-stone-200 text-stone-600 disabled:opacity-30';
        upBtn.disabled = idx === 0;
        upBtn.title = 'Move Up';
        upBtn.textContent = '↑';
        upBtn.addEventListener('click', () => moveBlock(idx, -1));

        const downBtn = document.createElement('button');
        downBtn.type = 'button';
        downBtn.className = 'px-1.5 py-0.5 rounded hover:bg-stone-200 text-stone-600 disabled:opacity-30';
        downBtn.disabled = idx === appState.blocks.length - 1;
        downBtn.title = 'Move Down';
        downBtn.textContent = '↓';
        downBtn.addEventListener('click', () => moveBlock(idx, 1));

        const editBtn = document.createElement('button');
        editBtn.type = 'button';
        editBtn.className = 'px-1.5 py-0.5 rounded hover:bg-amber-100 text-amber-800';
        editBtn.title = 'Customize / Edit Block';
        editBtn.textContent = '✎';
        editBtn.addEventListener('click', () => openBlockModal(blk.id));

        actions.appendChild(upBtn);
        actions.appendChild(downBtn);
        actions.appendChild(editBtn);

        if (blk.type === 'custom') {
          const delBtn = document.createElement('button');
          delBtn.type = 'button';
          delBtn.className = 'px-1.5 py-0.5 rounded hover:bg-red-100 text-red-700 font-bold';
          delBtn.title = 'Delete Custom Element';
          delBtn.textContent = '×';
          delBtn.addEventListener('click', () => {
            appState.blocks.splice(idx, 1);
            renderAll();
          });
          actions.appendChild(delBtn);
        }

        row.appendChild(left);
        row.appendChild(actions);
        container.appendChild(row);
      });
    }

    function openBlockModal(blockId = null, insertAfterId = null) {
      appState.editingBlockId = blockId;
      const modal = document.getElementById('blockModal');
      const modalTitle = document.getElementById('blockModalTitle');
      const posWrapper = document.getElementById('modalInsertPositionWrapper');
      const insertSelect = document.getElementById('modalInsertAfter');

      insertSelect.innerHTML = '<option value="__start__">At the very beginning of the service</option>';
      appState.blocks.forEach((b, i) => {
        const name = b.customData ? b.customData.heading : b.label;
        const opt = document.createElement('option');
        opt.value = b.id;
        opt.textContent = `After ${i + 1}. ${name}`;
        insertSelect.appendChild(opt);
      });

      if (blockId) {
        const blk = appState.blocks.find(x => x.id === blockId);
        if (!blk) return;
        modalTitle.textContent = `Customize Element: ${blk.customData ? blk.customData.heading : blk.label}`;
        posWrapper.classList.add('hidden');

        const data = blk.customData || appState.overrides[blockId] || getDefaultOverrideForBuiltin(blockId);
        document.getElementById('modalBlockHeading').value = data.heading || blk.label;
        document.getElementById('modalBlockSpeaker').value = data.speaker || 'Celebrant';
        document.getElementById('modalBlockRubric').value = data.rubric || '';
        document.getElementById('modalBlockBody').value = data.body || '';
        document.getElementById('modalBlockResponse').value = data.response || '';
      } else {
        modalTitle.textContent = 'Insert Liturgical Element into Service Order';
        posWrapper.classList.remove('hidden');
        const cat = document.getElementById('modalBlockCategory').value;
        populateModalFromTemplate(cat);
        if (insertAfterId) {
          insertSelect.value = insertAfterId;
        } else if (appState.blocks.length > 0) {
          insertSelect.value = appState.blocks[0].id;
        }
      }

      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    function populateModalFromTemplate(catKey) {
      const tpl = CUSTOM_TEMPLATES[catKey] || CUSTOM_TEMPLATES.custom_prayer;
      document.getElementById('modalBlockHeading').value = tpl.heading;
      document.getElementById('modalBlockSpeaker').value = tpl.speaker;
      document.getElementById('modalBlockRubric').value = tpl.rubric;
      document.getElementById('modalBlockBody').value = tpl.body;
      document.getElementById('modalBlockResponse').value = tpl.response;
    }

    function getDefaultOverrideForBuiltin(blockId) {
      const day = getCurrentDay();
      if (blockId === 'collect_day') {
        return {
          heading: 'The Collect of the Day',
          speaker: 'Celebrant',
          rubric: 'The community prays silently for a short period.',
          body: day.collect,
          response: 'Amen.'
        };
      }
      if (blockId === 'sermon') {
        return {
          heading: 'The Sermon / Homily',
          speaker: 'Preacher',
          rubric: 'A sermon is preached, followed by a period of silent reflection.',
          body: '',
          response: ''
        };
      }
      if (blockId === 'peace') {
        return {
          heading: 'The Peace (BAS p. 192)',
          speaker: 'Celebrant',
          rubric: 'All stand. The celebrant greets the people with the peace.',
          body: 'The peace of the Lord be always with you.',
          response: 'And also with you.'
        };
      }
      return {
        heading: '',
        speaker: 'Celebrant',
        rubric: 'Enter custom rubric instruction if desired.',
        body: 'Enter custom replacement liturgical text here (leave blank to use dynamic BAS text).',
        response: 'Amen.'
      };
    }

    function closeBlockModal() {
      const modal = document.getElementById('blockModal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      appState.editingBlockId = null;
    }

    function saveBlockFromModal() {
      const heading = document.getElementById('modalBlockHeading').value.trim() || 'Liturgical Element';
      const speaker = document.getElementById('modalBlockSpeaker').value.trim();
      const rubricTxt = document.getElementById('modalBlockRubric').value.trim();
      const bodyTxt = document.getElementById('modalBlockBody').value.trim();
      const respTxt = document.getElementById('modalBlockResponse').value.trim();

      if (appState.editingBlockId) {
        const blk = appState.blocks.find(x => x.id === appState.editingBlockId);
        if (blk) {
          if (blk.type === 'custom') {
            blk.label = heading;
            blk.customData = { heading, speaker, rubric: rubricTxt, body: bodyTxt, response: respTxt };
          } else {
            blk.label = heading;
            appState.overrides[blk.id] = { heading, speaker, rubric: rubricTxt, body: bodyTxt, response: respTxt };
          }
          blk.enabled = true;
        }
        showToast('Updated "' + heading + '"');
      } else {
        const newId = 'custom_' + Date.now();
        const newBlock = {
          id: newId,
          type: 'custom',
          label: heading,
          section: 'Custom Insertion',
          enabled: true,
          customData: { heading, speaker, rubric: rubricTxt, body: bodyTxt, response: respTxt }
        };
        const afterId = document.getElementById('modalInsertAfter').value;
        if (afterId === '__start__') {
          appState.blocks.unshift(newBlock);
        } else {
          const idx = appState.blocks.findIndex(x => x.id === afterId);
          if (idx >= 0) {
            appState.blocks.splice(idx + 1, 0, newBlock);
          } else {
            appState.blocks.push(newBlock);
          }
        }
        showToast('Inserted "' + heading + '" into service order');
      }

      closeBlockModal();
      renderAll();
    }

    function showToast(message) {
      const toast = document.getElementById('toast');
      const toastMsg = document.getElementById('toastMsg');
      toastMsg.textContent = message;
      toast.classList.remove('opacity-0', 'translate-y-12');
      toast.classList.add('opacity-100', 'translate-y-0');
      setTimeout(() => {
        toast.classList.remove('opacity-100', 'translate-y-0');
        toast.classList.add('opacity-0', 'translate-y-12');
      }, 2800);
    }

    function copyLiturgyToClipboard() {
      const sheet = document.getElementById('serviceSheet');
      const clone = sheet.cloneNode(true);
      clone.querySelectorAll('.no-print').forEach(el => el.remove());
      const text = clone.innerText;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          showToast('Service text copied to clipboard!');
        }).catch(() => fallbackCopyText(text));
      } else {
        fallbackCopyText(text);
      }
    }

    function fallbackCopyText(text) {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        showToast('Service text copied to clipboard!');
      } catch (err) {
        showToast('Failed to copy. Please select text manually.');
      }
      document.body.removeChild(textArea);
    }

    function exportServiceJson() {
      const payload = {
        parish: document.getElementById('parishTitle').value,
        serviceDate: document.getElementById('serviceDateInput').value,
        state: appState,
        dayData: getCurrentDay()
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `digitalbas-service-${appState.selectedDayKey}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast('Saved service configuration JSON!');
    }

    function rubric(text) {
      if (!appState.showRubrics || !text) return '';
      return `<p class="liturgical-rubric">${text}</p>`;
    }

    function dialogue(speaker, text, isPeople = false) {
      if (!text) return '';
      return `
        <div class="my-1.5 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
          <span class="text-xs uppercase tracking-wider font-sans font-semibold text-stone-500 min-w-[6rem]">${speaker}</span>
          <div class="flex-1 ${isPeople ? 'response-people' : 'text-stone-900'} whitespace-pre-line">${text}</div>
        </div>
      `;
    }

    function getProperPrefaceText(day) {
      const key = appState.preface === 'auto' ? (day.prefaceKey || 'lords_day') : appState.preface;
      return PROPER_PREFACES[key] || PROPER_PREFACES.lords_day;
    }

    function renderCustomBlockHtml(data) {
      let out = `<div class="text-xs uppercase font-sans font-semibold tracking-wider text-amber-900 mb-1">${data.heading}</div>`;
      if (data.rubric) out += rubric(data.rubric);
      if (data.body) {
        if (data.speaker) {
          out += dialogue(data.speaker, data.body, data.speaker.toLowerCase() === 'all' || data.speaker.toLowerCase() === 'people');
        } else {
          out += `<div class="my-2 text-stone-900 whitespace-pre-line">${data.body}</div>`;
        }
      }
      if (data.response) {
        out += dialogue('People', data.response, true);
      }
      return out;
    }

    function renderSingleBlockContent(blk, day) {
      if (blk.type === 'custom' && blk.customData) {
        return renderCustomBlockHtml(blk.customData);
      }
      if (appState.overrides[blk.id] && appState.overrides[blk.id].body && !appState.overrides[blk.id].body.startsWith('Enter custom replacement')) {
        return renderCustomBlockHtml(appState.overrides[blk.id]);
      }

      const id = blk.id;
      let h = '';

      if (id === 'greeting') {
        h += rubric('The people stand as able. The officiating minister greets the community.');
        if (appState.greeting === 'easter') {
          h += dialogue('Celebrant', 'Alleluia! Christ is risen.');
          h += dialogue('People', 'The Lord is risen indeed. Alleluia!', true);
          h += dialogue('Celebrant', 'May his grace and peace be with you.');
          h += dialogue('People', 'May he fill our hearts with joy.', true);
        } else if (appState.greeting === 'lent') {
          h += dialogue('Celebrant', 'Bless the Lord who forgives all our sins.');
          h += dialogue('People', 'His mercy endures for ever.', true);
        } else if (appState.greeting === 'epiphany') {
          h += dialogue('Celebrant', 'I will make you as a light for the nations,');
          h += dialogue('People', 'That my salvation may reach to the end of the earth.', true);
        } else if (appState.greeting === 'morning_office') {
          h += dialogue('Officiant', 'Lord, open our lips,');
          h += dialogue('People', 'And our mouth shall proclaim your praise.', true);
          h += dialogue('Officiant', 'O God, make speed to save us.');
          h += dialogue('People', 'O Lord, make haste to help us.', true);
          h += dialogue('All', 'Glory to the Father, and to the Son, and to the Holy Spirit: as it was in the beginning, is now, and will be for ever. Amen.', true);
        } else if (appState.greeting === 'evening_office') {
          h += dialogue('Officiant', 'Jesus Christ is the light of the world,');
          h += dialogue('People', 'A light no darkness can extinguish.', true);
        } else {
          h += dialogue('Celebrant', 'The grace of our Lord Jesus Christ, and the love of God, and the fellowship of the Holy Spirit, be with you all.');
          h += dialogue('People', 'And also with you.', true);
        }
        return h;
      }

      if (id === 'collect_purity') {
        h += `<div class="text-xs uppercase font-sans font-semibold tracking-wider text-stone-500 mb-1">Collect for Purity (BAS p. 185)</div>`;
        h += rubric('The celebrant says');
        h += dialogue('Celebrant', 'Almighty God, to you all hearts are open, all desires known, and from you no secrets are hidden. Cleanse the thoughts of our hearts by the inspiration of your Holy Spirit, that we may perfectly love you, and worthily magnify your holy name; through Christ our Lord.');
        h += dialogue('People', 'Amen.', true);
        return h;
      }

      if (id === 'canticle_praise') {
        if (appState.canticle === 'kyrie') {
          h += `<div class="bg-stone-50/70 p-3.5 rounded border border-stone-200/70">`;
          h += `<div class="text-xs uppercase font-sans font-semibold tracking-wider text-stone-500 mb-1">Kyrie Eleison (BAS p. 186)</div>`;
          h += dialogue('Leader', 'Lord, have mercy.');
          h += dialogue('People', 'Christ, have mercy.', true);
          h += dialogue('Leader', 'Lord, have mercy.');
          h += `</div>`;
        } else if (appState.canticle === 'trisagion') {
          h += `<div class="bg-stone-50/70 p-3.5 rounded border border-stone-200/70">`;
          h += `<div class="text-xs uppercase font-sans font-semibold tracking-wider text-stone-500 mb-1">Trisagion (BAS p. 187)</div>`;
          h += dialogue('Celebrant', 'Holy God, holy and mighty, holy and immortal,');
          h += dialogue('People', 'Have mercy on us. (Repeated three times)', true);
          h += `</div>`;
        } else if (appState.canticle === 'venite') {
          h += `<div class="bg-stone-50/70 p-4 rounded border border-stone-200/70">`;
          h += `<div class="text-xs uppercase font-sans font-semibold tracking-wider text-stone-500 mb-2">Venite • Psalm 95:1-7 (BAS p. 49)</div>`;
          h += `<div class="space-y-1.5 text-stone-800">
            <p><strong>Come, let us sing to the Lord; let us shout for joy to the rock of our salvation.</strong></p>
            <p><strong>Let us come before his presence with thanksgiving and raise a loud shout to him with psalms.</strong></p>
            <p><strong>For the Lord is a great God, and a great king above all gods.</strong></p>
            <p><strong>Come, let us bow down, and bend the knee, and kneel before the Lord our Maker.</strong></p>
            <p><strong>For he is our God, and we are the people of his pasture and the sheep of his hand. Oh, that today you would hearken to his voice!</strong></p>
          </div></div>`;
        } else if (appState.canticle === 'jubilate') {
          h += `<div class="bg-stone-50/70 p-4 rounded border border-stone-200/70">`;
          h += `<div class="text-xs uppercase font-sans font-semibold tracking-wider text-stone-500 mb-2">Jubilate • Psalm 100 (BAS p. 50)</div>`;
          h += `<div class="space-y-1.5 text-stone-800">
            <p><strong>Be joyful in the Lord, all you lands; serve the Lord with gladness and come before his presence with a song.</strong></p>
            <p><strong>Know this: The Lord himself is God; he himself has made us, and we are his; we are his people and the sheep of his pasture.</strong></p>
            <p><strong>Enter his gates with thanksgiving; go into his courts with praise; give thanks to him and call upon his name.</strong></p>
            <p><strong>For the Lord is good; his mercy is everlasting; and his faithfulness endures from age to age.</strong></p>
          </div></div>`;
        } else if (appState.canticle === 'phos_hilaron') {
          h += `<div class="bg-stone-50/70 p-4 rounded border border-stone-200/70">`;
          h += `<div class="text-xs uppercase font-sans font-semibold tracking-wider text-stone-500 mb-2">O Gracious Light • Phos Hilaron (BAS p. 62)</div>`;
          h += `<div class="space-y-1.5 text-stone-800">
            <p><strong>O gracious Light, pure brightness of the everliving Father in heaven,</strong></p>
            <p><strong>O Jesus Christ, holy and blessed!</strong></p>
            <p><strong>Now as we come to the setting of the sun, and our eyes behold the vesper light, we sing your praises, O God: Father, Son, and Holy Spirit.</strong></p>
            <p><strong>You are worthy at all times to be praised by happy voices, O Son of God, O Giver of life, and to be glorified through all the worlds.</strong></p>
          </div></div>`;
        } else {
          h += `<div class="bg-stone-50/70 p-4 rounded border border-stone-200/70">`;
          h += rubric('When appointed, the following hymn of praise is sung or said.');
          h += `<div class="text-xs uppercase font-sans font-semibold tracking-wider text-stone-500 mb-2">Glory to God • Gloria in Excelsis (BAS p. 186)</div>`;
          h += `<div class="space-y-2 text-stone-800">
            <p><strong>Glory to God in the highest, and peace to his people on earth.</strong></p>
            <p><strong>Lord God, heavenly King, almighty God and Father, we worship you, we give you thanks, we praise you for your glory.</strong></p>
            <p><strong>Lord Jesus Christ, only Son of the Father, Lord God, Lamb of God, you take away the sin of the world: have mercy on us; you are seated at the right hand of the Father: receive our prayer.</strong></p>
            <p><strong>For you alone are the Holy One, you alone are the Lord, you alone are the Most High, Jesus Christ, with the Holy Spirit, in the glory of God the Father. Amen.</strong></p>
          </div></div>`;
        }
        return h;
      }

      if (id === 'collect_day') {
        h += `<div class="text-xs uppercase font-sans font-semibold tracking-wider text-stone-500 mb-1">The Collect of the Day</div>`;
        h += dialogue('Celebrant', 'Let us pray.');
        h += rubric('The community prays silently for a short period.');
        h += `<p class="my-2 text-stone-900">${day.collect}</p>`;
        h += dialogue('People', 'Amen.', true);
        return h;
      }

      if (id === 'reading1') {
        const r1 = day.readings.reading1.tracks[day.readings.reading1.selectedTrack];
        h += `<div class="flex items-baseline justify-between mb-1">
          <span class="text-xs uppercase font-sans font-bold text-stone-600 tracking-wider">The First Reading</span>
          <span class="text-xs font-sans font-semibold text-amber-900">${r1.citation}</span>
        </div>`;
        h += rubric('The people sit for the readings.');
        h += dialogue('Reader', `A reading from ${r1.citation.split(' ')[0]}.`);
        h += `<div class="my-2.5 text-stone-900 text-justify leading-relaxed whitespace-pre-line pl-3 border-l-2 border-stone-300">${r1.text}</div>`;
        h += dialogue('Reader', 'The Word of the Lord.');
        h += dialogue('People', 'Thanks be to God.', true);
        return h;
      }

      if (id === 'psalm') {
        const psm = day.readings.psalm;
        h += `<div class="flex items-baseline justify-between mb-1">
          <span class="text-xs uppercase font-sans font-bold text-stone-600 tracking-wider">The Psalm</span>
          <span class="text-xs font-sans font-semibold text-amber-900">${psm.citation}</span>
        </div>`;
        h += rubric('The psalm is sung or said responsively.');
        h += `<div class="my-2.5 space-y-1.5 pl-2">`;
        psm.verses.forEach(v => {
          h += `<div class="text-stone-800">
            <span class="text-stone-700">${v.leader}</span><br>
            <span class="response-people pl-4">${v.people}</span>
          </div>`;
        });
        h += `</div>`;
        if (appState.includePsalmPrayer && day.psalmPrayer) {
          h += `<div class="mt-3 pt-2 border-t border-stone-200/50">`;
          h += `<div class="text-xs uppercase font-sans font-semibold tracking-wider text-stone-500 mb-0.5">Psalm Prayer (BAS Psalter)</div>`;
          h += `<p class="text-stone-800 italic">${day.psalmPrayer}</p>`;
          h += `</div>`;
        }
        return h;
      }

      if (id === 'reading2') {
        const r2 = day.readings.reading2;
        h += `<div class="flex items-baseline justify-between mb-1">
          <span class="text-xs uppercase font-sans font-bold text-stone-600 tracking-wider">The Second Reading</span>
          <span class="text-xs font-sans font-semibold text-amber-900">${r2.citation}</span>
        </div>`;
        h += dialogue('Reader', `A reading from ${r2.citation.split(' ')[0]}.`);
        h += `<div class="my-2.5 text-stone-900 text-justify leading-relaxed whitespace-pre-line pl-3 border-l-2 border-stone-300">${r2.text}</div>`;
        h += dialogue('Reader', 'The Word of the Lord.');
        h += dialogue('People', 'Thanks be to God.', true);
        return h;
      }

      if (id === 'gradual_gospel') {
        const gsp = day.readings.gospel;
        h += rubric('The people stand as able for the Gospel proclamation.');
        if (appState.gospelAcclamation === 'lenten') {
          h += `<div class="text-center my-2.5 py-1.5 px-3 bg-purple-50/60 rounded border border-purple-200/60 text-stone-700 font-sans text-xs uppercase tracking-wider font-semibold">
            Praise to you, Lord Jesus Christ, King of endless glory!
          </div>`;
        } else if (appState.gospelAcclamation === 'benedictus') {
          h += `<div class="bg-stone-50/70 p-3 rounded border border-stone-200/70 my-2.5 text-sm">
            <div class="text-xs uppercase font-sans font-semibold tracking-wider text-stone-500 mb-1">The Song of Zechariah • Benedictus (Luke 1:68-79, BAS p. 88)</div>
            <p><strong>Blessed be the Lord, the God of Israel; he has come to his people and set them free. He has raised up for us a mighty Saviour, born of the house of his servant David... In the tender compassion of our God, the dawn from on high shall break upon us, to shine on those who dwell in darkness and the shadow of death, and to guide our feet into the way of peace.</strong></p>
          </div>`;
        } else if (appState.gospelAcclamation === 'magnificat') {
          h += `<div class="bg-stone-50/70 p-3 rounded border border-stone-200/70 my-2.5 text-sm">
            <div class="text-xs uppercase font-sans font-semibold tracking-wider text-stone-500 mb-1">The Song of Mary • Magnificat (Luke 1:46-55, BAS p. 86)</div>
            <p><strong>My soul proclaims the greatness of the Lord, my spirit rejoices in God my Saviour; for he has looked with favour on his lowly servant. From this day all generations will call me blessed: the Almighty has done great things for me, and holy is his name.</strong></p>
          </div>`;
        } else {
          h += `<div class="text-center my-2.5 py-1.5 px-3 bg-amber-50/60 rounded border border-amber-200/60 text-stone-700 font-sans text-xs uppercase tracking-wider font-semibold">
            Alleluia! Speak, Lord, for your servant is listening; you have the words of eternal life. Alleluia!
          </div>`;
        }

        h += `<div class="flex items-baseline justify-between mb-1">
          <span class="text-xs uppercase font-sans font-bold text-stone-600 tracking-wider">The Holy Gospel</span>
          <span class="text-xs font-sans font-semibold text-amber-900">${gsp.citation}</span>
        </div>`;
        h += dialogue('Gospeller', 'The Lord be with you.');
        h += dialogue('People', 'And also with you.', true);
        h += dialogue('Gospeller', `The Holy Gospel of our Lord Jesus Christ according to ${gsp.citation.split(' ')[0]}.`);
        h += dialogue('People', 'Glory to you, Lord Jesus Christ.', true);
        h += `<div class="my-3 text-stone-900 text-justify leading-relaxed whitespace-pre-line pl-3 border-l-2 border-amber-600/60">${gsp.text}</div>`;
        h += dialogue('Gospeller', 'The Gospel of Christ.');
        h += dialogue('People', 'Praise to you, Lord Jesus Christ.', true);
        return h;
      }

      if (id === 'sermon') {
        h += `<div class="text-xs uppercase font-sans font-semibold tracking-wider text-stone-500 mb-1">The Sermon / Homily</div>`;
        h += rubric('The people sit. A sermon or homily is preached, followed by a period of silent reflection.');
        return h;
      }

      if (id === 'creed') {
        if (appState.creed === 'none') return '';
        h += rubric('The people stand as able to affirm the faith of the Church.');
        if (appState.creed === 'apostles') {
          h += `<div class="text-xs uppercase font-sans font-semibold tracking-wider text-stone-500 mb-2">The Apostles' Creed (BAS p. 189)</div>`;
          h += dialogue('Celebrant', 'Let us confess the faith of our baptism, as we say,');
          h += `<div class="space-y-2 text-stone-800 mt-2">
            <p><strong>I believe in God, the Father almighty, creator of heaven and earth.</strong></p>
            <p><strong>I believe in Jesus Christ, his only Son, our Lord. He was conceived by the power of the Holy Spirit and born of the Virgin Mary. He suffered under Pontius Pilate, was crucified, died, and was buried. He descended to the dead. On the third day he rose again. He ascended into heaven, and is seated at the right hand of the Father. He will come again to judge the living and the dead.</strong></p>
            <p><strong>I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and the life everlasting. Amen.</strong></p>
          </div>`;
        } else if (appState.creed === 'shema') {
          h += `<div class="text-xs uppercase font-sans font-semibold tracking-wider text-stone-500 mb-2">Hear, O Israel • The Shema (BAS p. 53)</div>`;
          h += `<div class="bg-stone-50/70 p-3.5 rounded border border-stone-200/70 text-stone-800">
            <p><strong>Hear, O Israel, the Lord our God, the Lord is one. Love the Lord your God with all your heart, with all your soul, with all your mind, and with all your strength.</strong></p>
            <p class="mt-2"><strong>This is the first and great commandment. The second is like it: Love your neighbour as yourself. There is no commandment greater than these.</strong></p>
          </div>`;
        } else {
          h += `<div class="text-xs uppercase font-sans font-semibold tracking-wider text-stone-500 mb-2">The Nicene Creed (BAS p. 188)</div>`;
          h += dialogue('Celebrant', 'Let us confess our faith, as we say,');
          h += `<div class="space-y-2 text-stone-800 mt-2">
            <p><strong>We believe in one God, the Father, the Almighty, maker of heaven and earth, of all that is, seen and unseen.</strong></p>
            <p><strong>We believe in one Lord, Jesus Christ, the only Son of God, eternally begotten of the Father, God from God, Light from Light, true God from true God, begotten, not made, of one being with the Father; through him all things were made.</strong></p>
            <p><strong>For us and for our salvation he came down from heaven, was incarnate of the Holy Spirit and the Virgin Mary and became truly human. For our sake he was crucified under Pontius Pilate; he suffered death and was buried. On the third day he rose again in accordance with the scriptures; he ascended into heaven and is seated at the right hand of the Father. He will come again in glory to judge the living and the dead, and his kingdom will have no end.</strong></p>
            <p><strong>We believe in the Holy Spirit, the Lord, the giver of life, who proceeds from the Father and the Son, who with the Father and the Son is worshipped and glorified, who has spoken through the prophets.</strong></p>
            <p><strong>We believe in one holy catholic and apostolic Church. We acknowledge one baptism for the forgiveness of sins. We look for the resurrection of the dead, and the life of the world to come. Amen.</strong></p>
          </div>`;
        }
        return h;
      }

      if (id === 'prayers_people') {
        h += `<div class="text-xs uppercase font-sans font-semibold tracking-wider text-stone-500 mb-2">The Prayers of the People</div>`;
        h += rubric('The intercessor leads the prayers of the community. The people may stand, sit, or kneel.');
        if (appState.prayers === 'litany2') {
          h += `<div class="space-y-1.5">
            ${dialogue('Leader', 'Let us pray with confidence to the Lord, saying, "Lord, hear our prayer."')}
            ${dialogue('Leader', 'O Lord, guard and direct your Church in the way of unity, service, and praise.')}
            ${dialogue('People', 'Lord, hear our prayer.', true)}
            ${dialogue('Leader', 'Give to all nations an awareness of the unity of the human family.')}
            ${dialogue('People', 'Lord, hear our prayer.', true)}
            ${dialogue('Leader', 'Cleanse our hearts of prejudice and selfishness, and inspire us to clothe the naked and feed the hungry.')}
            ${dialogue('People', 'Lord, hear our prayer.', true)}
            ${dialogue('Leader', 'Teach us to enjoy the fruits of the earth in wisdom and gratitude.')}
            ${dialogue('People', 'Lord, hear our prayer.', true)}
            ${dialogue('Leader', 'Comfort and heal all those who suffer in body, mind, or spirit.')}
            ${dialogue('People', 'Lord, hear our prayer.', true)}
          </div>`;
        } else if (appState.prayers === 'litany3') {
          h += `<div class="space-y-1.5">
            ${dialogue('Leader', 'Father, we pray for your holy catholic Church;')}
            ${dialogue('People', 'That we all may be one.', true)}
            ${dialogue('Leader', 'Grant that every member of the Church may truly and humbly serve you;')}
            ${dialogue('People', 'That your name may be glorified by all people.', true)}
            ${dialogue('Leader', 'We pray for all bishops, priests, and deacons;')}
            ${dialogue('People', 'That they may be faithful ministers of your word and sacraments.', true)}
            ${dialogue('Leader', 'We pray for all who govern and hold authority in the nations of the world;')}
            ${dialogue('People', 'That there may be justice and peace on the earth.', true)}
            ${dialogue('Leader', 'Have compassion on those who suffer from any grief or trouble;')}
            ${dialogue('People', 'That they may be delivered from their distress.', true)}
            ${dialogue('Leader', 'Give to the departed eternal rest;')}
            ${dialogue('People', 'Let light perpetual shine upon them.', true)}
          </div>`;
        } else if (appState.prayers === 'litany4') {
          h += `<div class="space-y-1.5">
            ${dialogue('Leader', 'In peace let us pray to the Lord, saying, "Lord, have mercy."')}
            ${dialogue('Leader', 'For the peace from above, for the loving-kindness of God, and for the salvation of our souls, let us pray to the Lord.')}
            ${dialogue('People', 'Lord, have mercy.', true)}
            ${dialogue('Leader', 'For the good earth which God has given us, and for the wisdom and will to conserve it, let us pray to the Lord.')}
            ${dialogue('People', 'Lord, have mercy.', true)}
            ${dialogue('Leader', 'For the poor and the oppressed, for the unemployed and the destitute, for prisoners and captives, and for all who remember and care for them, let us pray to the Lord.')}
            ${dialogue('People', 'Lord, have mercy.', true)}
          </div>`;
        } else if (appState.prayers === 'litany14') {
          h += `<div class="space-y-1.5">
            ${dialogue('Leader', 'Let us give thanks to God our Father for all his gifts so freely bestowed upon us:')}
            ${dialogue('Leader', 'For the beauty and wonder of your creation, in earth and sky and sea,')}
            ${dialogue('People', 'We thank you, Lord.', true)}
            ${dialogue('Leader', 'For all that is gracious in the lives of men and women, revealing the image of Christ,')}
            ${dialogue('People', 'We thank you, Lord.', true)}
            ${dialogue('Leader', 'For the communion of saints, in all times and places,')}
            ${dialogue('People', 'We thank you, Lord.', true)}
          </div>`;
        } else if (appState.prayers === 'pastoral') {
          h += `<div class="space-y-1.5">
            ${dialogue('Leader', 'In communion with the saints of every age, let us offer our prayers to God, saying: "Lord, in your mercy, hear our prayer."')}
            ${dialogue('Leader', 'For the peace of the world, for reconciliation with Indigenous peoples across Canada, and for faithful stewardship of creation.')}
            ${dialogue('People', 'Lord, in your mercy, hear our prayer.', true)}
            ${dialogue('Leader', 'For the Anglican Church of Canada, our Diocese, our Bishop, clergy, and lay pastoral assistants.')}
            ${dialogue('People', 'Lord, in your mercy, hear our prayer.', true)}
            ${dialogue('Leader', 'For our local community, for students and faculty at our universities and colleges, and for all who serve those in need.')}
            ${dialogue('People', 'Lord, in your mercy, hear our prayer.', true)}
            ${dialogue('Leader', 'For the sick, the grieving, and all who have asked for our prayers.')}
            ${dialogue('People', 'Lord, in your mercy, hear our prayer.', true)}
          </div>`;
        } else {
          h += `<div class="space-y-1.5">
            ${dialogue('Leader', 'In peace let us pray to the Lord, saying, "Lord, have mercy."')}
            ${dialogue('Leader', 'For peace from on high and for our salvation, let us pray to the Lord.')}
            ${dialogue('People', 'Lord, have mercy.', true)}
            ${dialogue('Leader', 'For the peace of the whole world, for the well-being of the Church of God, and for the unity of all, let us pray to the Lord.')}
            ${dialogue('People', 'Lord, have mercy.', true)}
            ${dialogue('Leader', 'For our bishops, and for all the clergy and people, let us pray to the Lord.')}
            ${dialogue('People', 'Lord, have mercy.', true)}
            ${dialogue('Leader', 'For this city and community, for every city and community, and for those who live in them in faith, let us pray to the Lord.')}
            ${dialogue('People', 'Lord, have mercy.', true)}
            ${dialogue('Leader', 'For the poor, the sick, the lonely, and for all who suffer, let us pray to the Lord.')}
            ${dialogue('People', 'Lord, have mercy.', true)}
          </div>`;
        }
        return h;
      }

      if (id === 'confession') {
        h += `<div class="text-xs uppercase font-sans font-semibold tracking-wider text-stone-500 mb-1">Confession and Absolution (BAS p. 191)</div>`;
        h += rubric('The officiating minister invites the people to confession.');
        h += dialogue('Celebrant', 'Dear friends in Christ, God is steadfast in love and infinite in mercy; he welcomes sinners and invites them to his table. Let us confess our sins, confident in God\'s forgiveness.');
        h += rubric('Silence is kept.');
        h += `<div class="my-2 text-stone-800 bg-stone-50/70 p-3.5 rounded border border-stone-200/70">
          ${dialogue('All', 'Most merciful God, we confess that we have sinned against you in thought, word, and deed, by what we have done, and by what we have left undone. We have not loved you with our whole heart; we have not loved our neighbours as ourselves. We are truly sorry and we humbly repent. For the sake of your Son Jesus Christ, have mercy on us and forgive us, that we may delight in your will, and walk in your ways, to the glory of your name. Amen.', true)}
        </div>`;
        if (appState.riteKey === 'word_lay' || appState.riteKey === 'morning_prayer' || appState.riteKey === 'evening_prayer') {
          h += rubric('A lay officiant prays for pardon including themselves ("us"):');
          h += dialogue('Officiant', 'Almighty God have mercy upon us, pardon and deliver us from all our sins, confirm and strengthen us in all goodness, and keep us in eternal life; through Jesus Christ our Lord.');
        } else {
          h += rubric('The bishop or priest pronounces the absolution:');
          h += dialogue('Celebrant', 'Almighty God have mercy upon you, pardon and deliver you from all your sins, confirm and strengthen you in all goodness, and keep you in eternal life; through Jesus Christ our Lord.');
        }
        h += dialogue('People', 'Amen.', true);
        return h;
      }

      if (id === 'peace') {
        h += `<div class="text-xs uppercase font-sans font-semibold tracking-wider text-stone-500 mb-1">The Peace (BAS p. 192)</div>`;
        h += rubric('All stand. The presiding celebrant addresses the people.');
        h += dialogue('Celebrant', 'The peace of the Lord be always with you.');
        h += dialogue('People', 'And also with you.', true);
        h += rubric('The members of the community greet one another in the name of the Lord.');
        return h;
      }

      if (id === 'offertory_gifts') {
        h += `<div class="text-xs uppercase font-sans font-semibold tracking-wider text-stone-500 mb-1">The Preparation of the Gifts &amp; Prayer over the Gifts</div>`;
        h += rubric('The bread and wine, and the offerings of the people, are presented at the holy table.');
        h += dialogue('Celebrant', 'Let us pray.');
        h += `<p class="my-2 text-stone-900">${day.prayerOverGifts || 'Gracious God, accept the offerings we bring this day, and sustain us by the gift of your presence; through Jesus Christ our Lord. Amen.'}</p>`;
        h += dialogue('People', 'Amen.', true);
        return h;
      }

      if (id === 'eucharistic_prayer') {
        const prefaceText = getProperPrefaceText(day);
        h += `<div class="text-xs uppercase font-sans font-semibold tracking-wider text-stone-500 mb-1">The Great Thanksgiving (${appState.eucharisticPrayer.replace('prayer', 'Eucharistic Prayer ')})</div>`;
        h += rubric('The people remain standing.');
        h += `<div class="space-y-1 mb-4">
          ${dialogue('Celebrant', 'The Lord be with you.')}
          ${dialogue('People', 'And also with you.', true)}
          ${dialogue('Celebrant', 'Lift up your hearts.')}
          ${dialogue('People', 'We lift them to the Lord.', true)}
          ${dialogue('Celebrant', 'Let us give thanks to the Lord our God.')}
          ${dialogue('People', 'It is right to give our thanks and praise.', true)}
        </div>`;

        h += `<div class="text-stone-900 leading-relaxed space-y-3">`;
        if (appState.eucharisticPrayer === 'prayer2') {
          h += `<p>We give thanks to you, O God, for the goodness and love which you have made known to us in creation; in the calling of Israel to be your people; in your Word spoken through the prophets; and above all in the Word made flesh, Jesus your Son.</p>`;
        } else if (appState.eucharisticPrayer === 'prayer4') {
          h += `<p>It is right to give you thanks and praise, O Lord, our God, sustainer of the universe, you are worthy of glory and praise. At your command all things came to be: the vast expanse of interstellar space, galaxies, suns, the planets in their courses, and this fragile earth, our island home; by your will they were created and have their being.</p>`;
        } else if (appState.eucharisticPrayer === 'prayer5') {
          h += `<p>We give you thanks and praise, almighty God, through your beloved Son, Jesus Christ, our Saviour and Redeemer. He is your living Word, through whom you have created all things. By the power of the Holy Spirit he took flesh of the Virgin Mary and shared our human nature. He lived and died as one of us, to reconcile us to you, the God and Father of all.</p>`;
        } else if (appState.eucharisticPrayer === 'prayer6') {
          h += `<p>It is right to glorify you, Father, and to give you thanks; for you alone are God, living and true, dwelling in light inaccessible from before time and for ever. Fountain of life and source of all goodness, you made all things and fill them with your blessing.</p>`;
        } else {
          h += `<p>Blessed are you, gracious God, creator of heaven and earth; we give you thanks and praise through Jesus Christ our Lord. <span class="italic text-amber-950">${prefaceText}</span></p>`;
          h += `<p>Therefore we praise you, joining our voices with angels and archangels and with all the company of heaven, who for ever sing this hymn to proclaim the glory of your name:</p>`;
        }

        h += `<div class="bg-stone-50/70 p-3.5 rounded border border-stone-200/70 my-3">
          <div class="text-xs uppercase font-sans font-semibold tracking-wider text-stone-500 mb-1">Sanctus and Benedictus</div>
          <p><strong>Holy, holy, holy Lord, God of power and might, heaven and earth are full of your glory. Hosanna in the highest. Blessed is he who comes in the name of the Lord. Hosanna in the highest.</strong></p>
        </div>`;

        h += `<p>On the night he was handed over to suffering and death, our Lord Jesus Christ took bread; and when he had given thanks to you, he broke it, and gave it to his disciples, and said, "Take, eat: this is my body which is given for you. Do this for the remembrance of me."</p>`;
        h += `<p>After supper he took the cup of wine; and when he had given thanks, he gave it to them, and said, "Drink this, all of you: this is my blood of the new covenant, which is shed for you and for many for the forgiveness of sins. Whenever you drink it, do this for the remembrance of me."</p>`;
        h += `<p class="font-sans text-xs uppercase font-bold text-stone-500 tracking-wider my-1.5">Memorial Acclamation</p>`;
        h += `<p><strong>Christ has died. Christ is risen. Christ will come again.</strong></p>`;
        h += `<p>Recalling his death, resurrection, and ascension, we offer you these gifts. Sanctify them by your Holy Spirit to be for your people the Body and Blood of your Son, the holy food and drink of new and unending life in him. Sanctify us also that we may faithfully receive this holy sacrament, and serve you in unity, constancy, and peace.</p>`;
        h += `<p>Through Christ, with Christ, and in Christ, in the unity of the Holy Spirit, all glory and honour are yours, almighty Father, now and for ever.</p>`;
        h += dialogue('People', 'Amen.', true);
        h += `</div>`;
        return h;
      }

      if (id === 'lords_prayer') {
        h += `<div class="text-xs uppercase font-sans font-semibold tracking-wider text-stone-500 mb-1">The Lord's Prayer (BAS p. 211)</div>`;
        if (appState.lordsPrayer === 'traditional') {
          h += dialogue('Celebrant', 'And now, as our Saviour Christ hath taught us, we are bold to say,');
          h += `<div class="my-2 space-y-1 text-stone-800">
            <p><strong>Our Father, who art in heaven, hallowed be thy name, thy kingdom come, thy will be done, on earth as it is in heaven.</strong></p>
            <p><strong>Give us this day our daily bread.</strong></p>
            <p><strong>And forgive us our trespasses, as we forgive them that trespass against us.</strong></p>
            <p><strong>And lead us not into temptation, but deliver us from evil.</strong></p>
            <p><strong>For thine is the kingdom, the power, and the glory, for ever and ever. Amen.</strong></p>
          </div>`;
        } else {
          h += dialogue('Celebrant', 'As our Saviour taught us, let us pray,');
          h += `<div class="my-2 space-y-1 text-stone-800">
            <p><strong>Our Father in heaven, hallowed be your name, your kingdom come, your will be done, on earth as in heaven.</strong></p>
            <p><strong>Give us today our daily bread.</strong></p>
            <p><strong>Forgive us our sins as we forgive those who sin against us.</strong></p>
            <p><strong>Save us from the time of trial, and deliver us from evil.</strong></p>
            <p><strong>For the kingdom, the power, and the glory are yours, now and for ever. Amen.</strong></p>
          </div>`;
        }
        return h;
      }

      if (id === 'fraction_communion') {
        h += `<div class="text-xs uppercase font-sans font-semibold tracking-wider text-stone-500 mb-1">The Breaking of the Bread (BAS pp. 212-213)</div>`;
        h += rubric('The celebrant breaks the consecrated bread for distribution.');
        if (appState.fraction === 'fraction2') {
          h += dialogue('Celebrant', 'Creator of all, you gave us golden fields of wheat, whose many grains we have gathered and made into this one bread.');
          h += dialogue('People', 'So may your Church be gathered from the ends of the earth into your kingdom.', true);
        } else if (appState.fraction === 'fraction3') {
          h += dialogue('Celebrant', 'God of promise, you have prepared a banquet for us.');
          h += dialogue('People', 'Happy are those who are called to the supper of the Lamb.', true);
        } else if (appState.fraction === 'fraction5') {
          h += dialogue('Celebrant', 'We break this bread,');
          h += dialogue('People', 'Communion in Christ\'s body once broken.', true);
          h += dialogue('Celebrant', 'Let your Church be the wheat which bears its fruit in dying.');
          h += dialogue('People', 'If we have died with him, we shall live with him; if we hold firm, we shall reign with him.', true);
        } else if (appState.fraction === 'fraction6') {
          h += dialogue('Celebrant', 'Lord, we died with you on the cross.');
          h += dialogue('People', 'Now we are raised to new life.', true);
          h += dialogue('Celebrant', 'We were buried in your tomb.');
          h += dialogue('People', 'Now we share in your resurrection.', true);
          h += dialogue('Celebrant', 'Live in us, that we may live in you.');
        } else {
          h += dialogue('Celebrant', 'We break this bread to share in the body of Christ.');
          h += dialogue('People', 'We, being many, are one body, for we all share in the one bread.', true);
        }
        h += `<div class="mt-3 pt-2 border-t border-stone-200/50">
          <div class="text-xs uppercase font-sans font-semibold tracking-wider text-stone-500 mb-1">The Communion</div>
          ${dialogue('Celebrant', 'The gifts of God for the People of God.')}
          ${dialogue('People', 'Thanks be to God.', true)}
          ${rubric('The celebrant and people receive communion.')}
        </div>`;
        return h;
      }

      if (id === 'post_communion') {
        h += `<div class="text-xs uppercase font-sans font-semibold tracking-wider text-stone-500 mb-1">Prayer after Communion</div>`;
        h += rubric('The people stand as the celebrant leads the post-communion prayer.');
        h += dialogue('Celebrant', 'Let us pray.');
        h += `<p class="my-2 text-stone-900">${day.prayerAfterCommunion || 'Almighty God, may we who have been nourished at this table grow in love and holiness, and serve you faithfully in the world; through Jesus Christ our Lord. Amen.'}</p>`;
        h += dialogue('People', 'Amen.', true);
        return h;
      }

      if (id === 'doxology') {
        h += `<div class="bg-stone-50/70 p-3.5 rounded border border-stone-200/70">
          <div class="text-xs uppercase font-sans font-semibold tracking-wider text-stone-500 mb-1">The Doxology (BAS p. 214)</div>
          ${dialogue('All', 'Glory to God, whose power, working in us, can do infinitely more than we can ask or imagine. Glory to God from generation to generation, in the Church and in Christ Jesus, for ever and ever. Amen.', true)}
        </div>`;
        return h;
      }

      if (id === 'blessing_dismissal') {
        if (appState.riteKey === 'word_lay' || appState.riteKey === 'morning_prayer' || appState.riteKey === 'evening_prayer') {
          h += `<div class="text-xs uppercase font-sans font-semibold tracking-wider text-stone-500 mb-1">The Grace &amp; Dismissal (BAS p. 55)</div>`;
          h += dialogue('All', 'The grace of our Lord Jesus Christ, and the love of God, and the fellowship of the Holy Spirit, be with us all evermore. Amen.', true);
        } else {
          h += `<div class="text-xs uppercase font-sans font-semibold tracking-wider text-stone-500 mb-1">The Blessing &amp; Dismissal</div>`;
          h += rubric('The bishop or priest blesses the people.');
          h += dialogue('Celebrant', 'The peace of God, which passes all understanding, keep your hearts and minds in the knowledge and love of God, and of his Son Jesus Christ our Lord; and the blessing of God Almighty, the Father, the Son, and the Holy Spirit, be amongst you and remain with you always.');
          h += dialogue('People', 'Amen.', true);
        }
        h += `<div class="mt-3">`;
        h += rubric('The deacon or leader dismisses the community.');
        if (appState.greeting === 'easter') {
          h += dialogue('Leader', 'Go in peace to love and serve the Lord. Alleluia!');
          h += dialogue('People', 'Thanks be to God. Alleluia!', true);
        } else {
          h += dialogue('Leader', 'Go forth in the name of Christ.');
          h += dialogue('People', 'Thanks be to God.', true);
        }
        h += `</div>`;
        return h;
      }

      return '';
    }

    function renderService() {
      const day = getCurrentDay();
      const parish = document.getElementById('parishTitle').value || "All Saints' Anglican Church";
      const dateNote = document.getElementById('serviceDateInput').value || "";
      const riteSelect = document.getElementById('ritePreset');
      const riteTitle = riteSelect.options[riteSelect.selectedIndex].text.split(' (')[0];
      const sheet = document.getElementById('serviceSheet');

      let html = '';

      html += `
        <div class="text-center pb-6 border-b border-stone-300/80 mb-6">
          <div class="text-xs uppercase tracking-widest font-sans font-semibold text-stone-500 mb-1">${parish}</div>
          <h1 class="text-2xl sm:text-3xl font-cinzel font-bold text-stone-900 tracking-wide">${riteTitle}</h1>
          <div class="text-sm font-sans font-medium text-amber-900 mt-1">${day.name}</div>
          ${dateNote ? `<div class="text-xs font-sans text-stone-600 mt-0.5">${dateNote}</div>` : ''}
          <div class="text-xs text-stone-500 italic mt-0.5">The Book of Alternative Services (1985) • Anglican Church of Canada</div>
        </div>
      `;

      let currentSection = '';
      const activeBlocks = appState.blocks.map((b, idx) => ({ block: b, index: idx })).filter(x => x.block.enabled);

      activeBlocks.forEach(({ block, index }) => {
        const blockHtml = renderSingleBlockContent(block, day);
        if (!blockHtml) return;

        if (block.section && block.section !== currentSection && block.section !== 'Custom Insertion') {
          currentSection = block.section;
          html += `
            <div class="mt-7 mb-3">
              <h2 class="text-lg font-cinzel font-bold text-stone-800 uppercase tracking-wider border-b border-stone-300 pb-1">
                ${currentSection}
              </h2>
            </div>
          `;
        }

        const inlineToolbar = appState.showInlineControls ? `
          <div class="block-hover-controls no-print opacity-0 transition-opacity flex items-center space-x-1 bg-stone-100 border border-stone-300 rounded px-1.5 py-0.5 text-xs font-sans">
            <button type="button" onclick="window.moveBlockGlobal(${index}, -1)" class="px-1 hover:text-amber-800" title="Move Up">↑</button>
            <button type="button" onclick="window.moveBlockGlobal(${index}, 1)" class="px-1 hover:text-amber-800" title="Move Down">↓</button>
            <button type="button" onclick="window.editBlockGlobal('${block.id}')" class="px-1 hover:text-amber-800" title="Edit Text/Rubric">✎ Edit</button>
            <button type="button" onclick="window.insertAfterGlobal('${block.id}')" class="px-1 hover:text-emerald-700" title="Insert Element Below">+ Insert Below</button>
            <button type="button" onclick="window.removeBlockGlobal(${index})" class="px-1 text-red-700 hover:text-red-900" title="Remove from Service">×</button>
          </div>
        ` : '';

        html += `
          <div class="service-block-wrapper relative py-3 border-b border-stone-200/60 group">
            <div class="flex items-center justify-end mb-0.5">
              ${inlineToolbar}
            </div>
            ${blockHtml}
          </div>
        `;
      });

      sheet.innerHTML = html;
    }

    window.moveBlockGlobal = function(idx, dir) { moveBlock(idx, dir); };
    window.editBlockGlobal = function(id) { openBlockModal(id); };
    window.insertAfterGlobal = function(id) { openBlockModal(null, id); };
    window.removeBlockGlobal = function(idx) { removeOrDisableBlock(idx); };
