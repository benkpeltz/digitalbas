/**
 * digitalbas - Application State & Sequencer Logic
 */

let appState = {
      showInstructiveGuide: true,
      showSectionCommentary: true,
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
      try {
        const savedGuide = localStorage.getItem('digitalbas_showInstructiveGuide');
        if (savedGuide !== null) appState.showInstructiveGuide = (savedGuide === 'true');
        const savedSec = localStorage.getItem('digitalbas_showSectionCommentary');
        if (savedSec !== null) appState.showSectionCommentary = (savedSec === 'true');
      } catch (e) {}
      loadRiteSequence(appState.riteKey, false);
      initListeners();
      loadDayData(appState.selectedDayKey);
      syncSettingsUI();
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
        const riteToOccasion = {
          baptism: 'baptism_occasion',
          confirmation: 'confirmation_occasion',
          marriage: 'marriage_occasion',
          funeral: 'funeral_occasion',
          ordination: 'ordination_occasion',
          new_ministry: 'new_ministry_occasion',
          reconciliation_sick: 'healing'
        };
        if (riteToOccasion[riteKey] && LECTIONARY_DATA[riteToOccasion[riteKey]]) {
          appState.selectedDayKey = riteToOccasion[riteKey];
          const feastEl = document.getElementById('feastPreset');
          if (feastEl) feastEl.value = appState.selectedDayKey;
          loadDayData(appState.selectedDayKey);
        }

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
        } else if (riteKey === 'funeral') {
          appState.greeting = 'easter';
          appState.creed = 'apostles';
          appState.preface = 'commemoration_dead';
          appState.fraction = 'fraction6';
        } else if (riteKey === 'marriage') {
          appState.greeting = 'standard';
          appState.preface = 'marriage';
        } else if (riteKey === 'baptism') {
          appState.greeting = 'easter';
          appState.preface = 'baptism';
        } else if (riteKey === 'ordination') {
          appState.greeting = 'standard';
          appState.creed = 'nicene';
          appState.preface = 'apostles_ordination';
        } else {
          appState.greeting = 'standard';
          appState.canticle = 'gloria';
          appState.gospelAcclamation = 'alleluia';
          appState.creed = 'nicene';
          appState.preface = 'auto';
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
        renderInstructiveGuides();
        renderService();
      });
      document.getElementById('canticleSelect').addEventListener('change', (e) => {
        appState.canticle = e.target.value;
        renderInstructiveGuides();
        renderService();
      });
      document.getElementById('gospelAcclamationSelect').addEventListener('change', (e) => {
        appState.gospelAcclamation = e.target.value;
        renderInstructiveGuides();
        renderService();
      });
      document.getElementById('creedSelect').addEventListener('change', (e) => {
        appState.creed = e.target.value;
        setBlockEnabled('creed', e.target.value !== 'none');
        renderAll();
      });
      document.getElementById('prayersSelect').addEventListener('change', (e) => {
        appState.prayers = e.target.value;
        renderInstructiveGuides();
        renderService();
      });
      document.getElementById('eucharisticPrayerSelect').addEventListener('change', (e) => {
        appState.eucharisticPrayer = e.target.value;
        renderInstructiveGuides();
        renderService();
      });
      document.getElementById('prefaceSelect').addEventListener('change', (e) => {
        appState.preface = e.target.value;
        renderInstructiveGuides();
        renderService();
      });
      document.getElementById('lordsPrayerSelect').addEventListener('change', (e) => {
        appState.lordsPrayer = e.target.value;
        renderInstructiveGuides();
        renderService();
      });
      document.getElementById('fractionSelect').addEventListener('change', (e) => {
        appState.fraction = e.target.value;
        renderInstructiveGuides();
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
        updateSidebarBibleGatewayLinks();
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
        updateSidebarBibleGatewayLinks();
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
        updateSidebarBibleGatewayLinks();
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
        updateSidebarBibleGatewayLinks();
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

      document.getElementById('openSettingsBtn').addEventListener('click', () => {
        syncSettingsUI();
        const modal = document.getElementById('settingsModal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      });
      document.getElementById('closeSettingsModalBtn').addEventListener('click', () => {
        const modal = document.getElementById('settingsModal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      });
      document.getElementById('doneSettingsModalBtn').addEventListener('click', () => {
        const modal = document.getElementById('settingsModal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      });

      document.getElementById('settingsToggleGuide').addEventListener('change', (e) => {
        appState.showInstructiveGuide = e.target.checked;
        try { localStorage.setItem('digitalbas_showInstructiveGuide', String(appState.showInstructiveGuide)); } catch (err) {}
        syncSettingsUI();
        renderInstructiveGuides();
        showToast(appState.showInstructiveGuide ? 'Instructive Liturgical Guide turned ON' : 'Instructive Liturgical Guide turned OFF (compact mode)');
      });

      document.getElementById('toggleGuideToolbarBtn').addEventListener('click', () => {
        appState.showInstructiveGuide = !appState.showInstructiveGuide;
        try { localStorage.setItem('digitalbas_showInstructiveGuide', String(appState.showInstructiveGuide)); } catch (err) {}
        syncSettingsUI();
        renderInstructiveGuides();
        showToast(appState.showInstructiveGuide ? 'Instructive Liturgical Guide turned ON' : 'Instructive Liturgical Guide turned OFF (compact mode)');
      });

      document.getElementById('settingsToggleSectionNotes').addEventListener('change', (e) => {
        appState.showSectionCommentary = e.target.checked;
        try { localStorage.setItem('digitalbas_showSectionCommentary', String(appState.showSectionCommentary)); } catch (err) {}
        syncSettingsUI();
        renderService();
      });

      document.getElementById('settingsToggleRubrics').addEventListener('change', (e) => {
        appState.showRubrics = e.target.checked;
        syncSettingsUI();
        renderService();
      });

      document.getElementById('settingsToggleInlineControls').addEventListener('change', (e) => {
        appState.showInlineControls = e.target.checked;
        syncSettingsUI();
        renderService();
      });

      document.getElementById('toggleRubricsBtn').addEventListener('click', () => {
        appState.showRubrics = !appState.showRubrics;
        syncSettingsUI();
        renderService();
      });

      document.getElementById('toggleInlineControlsBtn').addEventListener('click', () => {
        appState.showInlineControls = !appState.showInlineControls;
        syncSettingsUI();
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

      const downloadMenuBtn = document.getElementById('downloadMenuBtn');
      const downloadDropdownMenu = document.getElementById('downloadDropdownMenu');
      const downloadDropdownContainer = document.getElementById('downloadDropdownContainer');

      function closeDownloadDropdown() {
        if (downloadDropdownMenu) {
          downloadDropdownMenu.classList.add('hidden');
          if (downloadMenuBtn) downloadMenuBtn.setAttribute('aria-expanded', 'false');
        }
      }

      if (downloadMenuBtn && downloadDropdownMenu) {
        downloadMenuBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const isHidden = downloadDropdownMenu.classList.contains('hidden');
          if (isHidden) {
            downloadDropdownMenu.classList.remove('hidden');
            downloadMenuBtn.setAttribute('aria-expanded', 'true');
          } else {
            closeDownloadDropdown();
          }
        });

        document.addEventListener('click', (e) => {
          if (downloadDropdownContainer && !downloadDropdownContainer.contains(e.target)) {
            closeDownloadDropdown();
          }
        });

        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') closeDownloadDropdown();
        });
      }

      document.getElementById('printBtn').addEventListener('click', () => window.print());
      document.getElementById('copyLitBtn').addEventListener('click', copyLiturgyToClipboard);
      document.getElementById('exportJsonBtn').addEventListener('click', () => {
        closeDownloadDropdown();
        exportServiceJson();
      });
      document.getElementById('downloadDocxBtn').addEventListener('click', () => {
        closeDownloadDropdown();
        exportServiceDocx();
      });
      document.getElementById('downloadPdfBtn').addEventListener('click', () => {
        closeDownloadDropdown();
        exportServicePdf();
      });
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
          <input type="radio" name="reading1TrackRadio" value="${idx}" ${idx === day.readings.reading1.selectedTrack ? 'checked' : ''} class="text-rubric focus:ring-amber-600">
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

    function getBibleGatewayUrl(citation) {
      if (!citation) return 'https://www.biblegateway.com/?version=NRSVUE';
      // Clean parenthetical descriptive notes like "(The Passion of our Lord)" while keeping verse numbers like "(15-20)"
      let clean = citation.replace(/\(([^)]*[a-zA-Z][^)]*)\)/g, '').trim();
      clean = clean.replace(/\((\d)/g, ', $1').replace(/\)/g, '').trim();
      // Strip trailing sub-verse letters like "35c" or "14a" so Bible Gateway resolves the full verse cleanly
      clean = clean.replace(/(\d+)[a-d]\b/g, '$1');
      return `https://www.biblegateway.com/passage/?search=${encodeURIComponent(clean)}&version=NRSVUE`;
    }

    function getBookDisplayName(citation) {
      if (!citation) return 'Scripture';
      const m = citation.match(/^([1-3]?\s*[A-Za-z]+(?:\s+of\s+[A-Za-z]+)?)/);
      return m ? m[1].trim() : citation.split(' ')[0];
    }

    function renderScriptureLinkBox(citation, optionalText) {
      const url = getBibleGatewayUrl(citation);
      let box = `
        <div class="my-2.5 py-2.5 px-3.5 bg-white border border-black rounded flex flex-wrap items-center justify-between gap-2">
          <div>
            <span class="font-bold text-black">${citation}</span>
            <span class="liturgical-rubric text-xs ml-1.5">(NRSV)</span>
          </div>
          <a href="${url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-3 py-1 text-xs font-sans font-bold rounded bg-rubric hover:bg-red-800 text-white transition shadow-sm no-underline">
            <span>Read Full Passage on Bible Gateway (NRSV)</span>
            <svg class="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        </div>
      `;
      if (optionalText && optionalText.trim().length > 0) {
        box += `<div class="my-2.5 text-black text-justify leading-relaxed whitespace-pre-line pl-3 border-l-2 border-black">${optionalText}</div>`;
      }
      return box;
    }

    function updateSidebarBibleGatewayLinks() {
      const day = getCurrentDay();
      const r1Sel = day.readings.reading1.tracks[day.readings.reading1.selectedTrack];
      const r1Link = document.getElementById('reading1SidebarLink');
      if (r1Link) r1Link.href = getBibleGatewayUrl(r1Sel.citation);

      const psmLink = document.getElementById('psalmSidebarLink');
      if (psmLink) psmLink.href = getBibleGatewayUrl(day.readings.psalm.citation);

      const r2Link = document.getElementById('reading2SidebarLink');
      if (r2Link) r2Link.href = getBibleGatewayUrl(day.readings.reading2.citation);

      const gspLink = document.getElementById('gospelSidebarLink');
      if (gspLink) gspLink.href = getBibleGatewayUrl(day.readings.gospel.citation);
    }

    function syncEditFields() {
      const day = getCurrentDay();
      const r1Sel = day.readings.reading1.tracks[day.readings.reading1.selectedTrack];
      document.getElementById('reading1Citation').value = r1Sel.citation;
      document.getElementById('reading1Text').value = r1Sel.text || '';

      document.getElementById('psalmCitation').value = day.readings.psalm.citation;
      document.getElementById('psalmCitationLabel').textContent = day.readings.psalm.citation;
      document.getElementById('psalmText').value = day.readings.psalm.verses.map(v => `${v.leader} / ${v.people}`).join('\n');

      document.getElementById('reading2Citation').value = day.readings.reading2.citation;
      document.getElementById('reading2CitationLabel').textContent = day.readings.reading2.citation;
      document.getElementById('reading2Text').value = day.readings.reading2.text || '';

      document.getElementById('gospelCitation').value = day.readings.gospel.citation;
      document.getElementById('gospelCitationLabel').textContent = day.readings.gospel.citation;
      document.getElementById('gospelText').value = day.readings.gospel.text || '';

      document.getElementById('collectInput').value = day.collect || '';
      document.getElementById('giftsPrayerInput').value = day.prayerOverGifts || '';
      document.getElementById('postCommunionInput').value = day.prayerAfterCommunion || '';
      updateSidebarBibleGatewayLinks();
    }

    function syncSettingsUI() {
      document.body.classList.toggle('hide-instructive-guide', !appState.showInstructiveGuide);
      document.body.classList.toggle('hide-section-commentary', !appState.showSectionCommentary);

      const gChk = document.getElementById('settingsToggleGuide');
      if (gChk) gChk.checked = appState.showInstructiveGuide;
      const sChk = document.getElementById('settingsToggleSectionNotes');
      if (sChk) sChk.checked = appState.showSectionCommentary;
      const rChk = document.getElementById('settingsToggleRubrics');
      if (rChk) rChk.checked = appState.showRubrics;
      const iChk = document.getElementById('settingsToggleInlineControls');
      if (iChk) iChk.checked = appState.showInlineControls;

      const rubricStatusEl = document.getElementById('rubricStatusText');
      if (rubricStatusEl) {
        rubricStatusEl.textContent = appState.showRubrics ? 'Visible' : 'Hidden';
        rubricStatusEl.className = appState.showRubrics ? 'font-semibold text-rubric' : 'font-semibold text-stone-500';
      }

      const inlineStatusEl = document.getElementById('inlineControlsStatusText');
      if (inlineStatusEl) {
        inlineStatusEl.textContent = appState.showInlineControls ? 'On' : 'Off';
        inlineStatusEl.className = appState.showInlineControls ? 'font-semibold text-rubric' : 'font-semibold text-stone-500';
      }

      const guideToolbarEl = document.getElementById('guideToolbarStatusText');
      if (guideToolbarEl) {
        guideToolbarEl.textContent = appState.showInstructiveGuide ? 'On' : 'Off';
        guideToolbarEl.className = appState.showInstructiveGuide ? 'font-semibold text-black' : 'font-semibold text-stone-500';
      }

      const headerBadge = document.getElementById('headerGuideBadge');
      if (headerBadge) {
        headerBadge.textContent = appState.showInstructiveGuide ? 'Guide: On' : 'Guide: Off';
        headerBadge.className = appState.showInstructiveGuide
          ? 'ml-1.5 px-1.5 py-0.2 text-[10px] font-semibold uppercase rounded bg-rubric text-white'
          : 'ml-1.5 px-1.5 py-0.2 text-[10px] font-semibold uppercase rounded bg-stone-700 text-stone-300';
      }
    }

    function buildCompareDetails(title, itemsObj, activeKey) {
      let rows = '';
      Object.keys(itemsObj).forEach(k => {
        const val = itemsObj[k];
        const text = typeof val === 'string' ? val : `<strong>${val.title}:</strong> ${val.significance}`;
        const isCurrent = k === activeKey;
        rows += `<div class="py-1 border-b border-stone-200/60 last:border-b-0 ${isCurrent ? 'bg-neutral-100 px-1.5 rounded border-l-2 border-rubric' : ''}">${text}</div>`;
      });
      return `
        <details class="mt-1.5 pt-1 border-t border-stone-200/70 text-[11px] text-stone-600">
          <summary class="cursor-pointer font-semibold text-black hover:text-rubric select-none">${title}</summary>
          <div class="mt-1.5 space-y-1">${rows}</div>
        </details>
      `;
    }

    function renderInstructiveGuides() {
      if (!appState.showInstructiveGuide) return;

      // 1. Rite Guide
      const riteBox = document.getElementById('guideRiteBox');
      if (riteBox) {
        const rInfo = INSTRUCTIVE_GUIDE.rites[appState.riteKey] || INSTRUCTIVE_GUIDE.rites.eucharist;
        riteBox.innerHTML = `
          <div class="font-semibold text-black mb-0.5 flex items-center gap-1">
            <span>✦ Liturgical Significance: ${rInfo.title}</span>
          </div>
          <p>${rInfo.significance}</p>
          <p class="mt-1 text-[11px] text-black font-medium"><strong>When to use:</strong> ${rInfo.whenToUse}</p>
          ${buildCompareDetails('Compare all 12 BAS Rites & Special Services', INSTRUCTIVE_GUIDE.rites, appState.riteKey)}
        `;
      }

      // 2. Feast / Occasion Guide
      const feastBox = document.getElementById('guideFeastBox');
      if (feastBox) {
        const day = getCurrentDay();
        const prefKey = day.prefaceKey || 'lords_day';
        const prefDesc = INSTRUCTIVE_GUIDE.prefaces[prefKey] || '';
        feastBox.innerHTML = `
          <div class="font-semibold text-stone-800 mb-0.5">✦ Seasonal &amp; Pastoral Context (${day.season}):</div>
          <p>Selecting an occasion loads its appointed <strong>Collect of the Day</strong>, <strong>Lectionary Readings</strong>, <strong>Prayer over the Gifts</strong>, and <strong>Prayer after Communion</strong>, and links to the matching seasonal <strong>Proper Preface</strong>.</p>
          ${prefDesc ? `<p class="mt-1 text-[11px] text-stone-600">${prefDesc}</p>` : ''}
        `;
      }

      // 3. Readings Guide (Track 1 vs Track 2, Psalm Prayers, Gospel)
      const readingsBox = document.getElementById('guideReadingsBox');
      if (readingsBox) {
        readingsBox.innerHTML = `
          <div class="font-semibold text-black mb-1">✦ Understanding the BAS Lectionary Structure:</div>
          <div class="space-y-1.5 text-[11px]">
            <p>${INSTRUCTIVE_GUIDE.readingsGuide.track1VsTrack2}</p>
            <p>${INSTRUCTIVE_GUIDE.readingsGuide.psalmAndPrayer}</p>
            <p>${INSTRUCTIVE_GUIDE.readingsGuide.epistleAndGospel}</p>
          </div>
        `;
      }

      // 4. Greeting Guide
      const greetingBox = document.getElementById('guideGreetingBox');
      if (greetingBox) {
        greetingBox.innerHTML = `
          <div>${INSTRUCTIVE_GUIDE.greetings[appState.greeting] || INSTRUCTIVE_GUIDE.greetings.standard}</div>
          ${buildCompareDetails('Compare all Gathering Greetings', INSTRUCTIVE_GUIDE.greetings, appState.greeting)}
        `;
      }

      // 5. Canticle Guide
      const canticleBox = document.getElementById('guideCanticleBox');
      if (canticleBox) {
        canticleBox.innerHTML = `
          <div>${INSTRUCTIVE_GUIDE.canticles[appState.canticle] || INSTRUCTIVE_GUIDE.canticles.gloria}</div>
          ${buildCompareDetails('Compare Gloria, Kyrie, Trisagion, Venite, Jubilate & Phos Hilaron', INSTRUCTIVE_GUIDE.canticles, appState.canticle)}
        `;
      }

      // 6. Gospel Acclamation Guide
      const acclBox = document.getElementById('guideAcclamationBox');
      if (acclBox) {
        acclBox.innerHTML = `
          <div>${INSTRUCTIVE_GUIDE.acclamations[appState.gospelAcclamation] || INSTRUCTIVE_GUIDE.acclamations.alleluia}</div>
          ${buildCompareDetails('Compare Gospel Acclamations & Office Canticles', INSTRUCTIVE_GUIDE.acclamations, appState.gospelAcclamation)}
        `;
      }

      // 7. Creed Guide
      const creedBox = document.getElementById('guideCreedBox');
      if (creedBox) {
        creedBox.innerHTML = `
          <div>${INSTRUCTIVE_GUIDE.creeds[appState.creed] || INSTRUCTIVE_GUIDE.creeds.nicene}</div>
          ${buildCompareDetails('Compare Nicene Creed, Apostles\' Creed & The Shema', INSTRUCTIVE_GUIDE.creeds, appState.creed)}
        `;
      }

      // 8. Prayers of the People Guide
      const prayersBox = document.getElementById('guidePrayersBox');
      if (prayersBox) {
        prayersBox.innerHTML = `
          <div>${INSTRUCTIVE_GUIDE.prayers[appState.prayers] || INSTRUCTIVE_GUIDE.prayers.litany1}</div>
          ${buildCompareDetails('Compare all BAS Litanies of the People', INSTRUCTIVE_GUIDE.prayers, appState.prayers)}
        `;
      }

      // 9. Eucharistic Prayer Guide
      const epBox = document.getElementById('guideEucharisticPrayerBox');
      if (epBox) {
        epBox.innerHTML = `
          <div>${INSTRUCTIVE_GUIDE.eucharisticPrayers[appState.eucharisticPrayer] || INSTRUCTIVE_GUIDE.eucharisticPrayers.prayer1}</div>
          ${buildCompareDetails('Compare BAS Eucharistic Prayers 1 through 6', INSTRUCTIVE_GUIDE.eucharisticPrayers, appState.eucharisticPrayer)}
        `;
      }

      // 10. Proper Preface Guide
      const prefBox = document.getElementById('guidePrefaceBox');
      if (prefBox) {
        const usesVarPreface = (appState.eucharisticPrayer === 'prayer1' || appState.eucharisticPrayer === 'prayer3');
        const note = usesVarPreface
          ? `<span class="text-emerald-800 font-medium">Active with ${appState.eucharisticPrayer.replace('prayer', 'Eucharistic Prayer ')}.</span>`
          : `<span class="text-rubric font-medium">Note: ${appState.eucharisticPrayer.replace('prayer', 'Eucharistic Prayer ')} uses its own fixed preface; switch to Prayer 1 or Prayer 3 if you wish to insert this seasonal Proper Preface.</span>`;
        prefBox.innerHTML = `
          <div>${INSTRUCTIVE_GUIDE.prefaces[appState.preface] || INSTRUCTIVE_GUIDE.prefaces.auto}</div>
          <div class="mt-1 text-[11px]">${note}</div>
          ${buildCompareDetails('Compare all Seasonal & Pastoral Proper Prefaces', INSTRUCTIVE_GUIDE.prefaces, appState.preface)}
        `;
      }

      // 11. Lord's Prayer & Fraction Guide
      const fracBox = document.getElementById('guideFractionLordsPrayerBox');
      if (fracBox) {
        fracBox.innerHTML = `
          <div class="space-y-1.5">
            <div>${INSTRUCTIVE_GUIDE.lordsPrayer[appState.lordsPrayer] || INSTRUCTIVE_GUIDE.lordsPrayer.contemporary}</div>
            <div class="pt-1 border-t border-stone-200/70">${INSTRUCTIVE_GUIDE.fractions[appState.fraction] || INSTRUCTIVE_GUIDE.fractions.fraction1}</div>
          </div>
          ${buildCompareDetails('Compare all BAS Fraction Sentences (1, 2, 3, 5, 6)', INSTRUCTIVE_GUIDE.fractions, appState.fraction)}
        `;
      }
    }

    function renderAll() {
      renderSequencerList();
      renderInstructiveGuides();
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
        chk.className = 'rounded text-rubric focus:ring-amber-600 w-3.5 h-3.5 flex-shrink-0 cursor-pointer';
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
        editBtn.className = 'px-1.5 py-0.5 rounded hover:bg-amber-100 text-rubric';
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
      a.download = `bas-service-${appState.selectedDayKey}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast('Saved service configuration JSON!');
    }

    /**
     * Extracts the currently rendered service from #serviceSheet into a clean array of
     * liturgical document items preserving BAS colouration & typography:
     * - type: 'title' | 'subtitle' | 'meta' | 'rubric' | 'section' | 'block_header' | 'dialogue' | 'psalm_verse' | 'scripture_link' | 'paragraph'
     */
    function extractStructuredServiceItems() {
      const items = [];
      const day = getCurrentDay();
      const parish = document.getElementById('parishTitle').value || "All Saints' Anglican Church";
      const dateNote = document.getElementById('serviceDateInput').value || "";
      const riteSelect = document.getElementById('ritePreset');
      const riteTitle = riteSelect.options[riteSelect.selectedIndex].text.split(' (')[0];

      items.push({ type: 'meta_parish', text: parish.toUpperCase() });
      items.push({ type: 'title', text: riteTitle });
      items.push({ type: 'subtitle', text: day.name });
      if (dateNote) {
        items.push({ type: 'meta_date', text: dateNote });
      }
      items.push({ type: 'rubric_center', text: 'The Book of Alternative Services (1985) • Anglican Church of Canada' });
      items.push({ type: 'divider' });

      const sheet = document.getElementById('serviceSheet');
      if (!sheet) return items;

      Array.from(sheet.children).forEach((child) => {
        // Section header container
        const h2 = child.querySelector && child.querySelector('h2');
        if (h2) {
          items.push({ type: 'section', text: h2.textContent.trim().toUpperCase() });
          return;
        }

        if (!child.classList || !child.classList.contains('service-block-wrapper')) return;

        // Walk children inside .service-block-wrapper
        function walkBlockNodes(container) {
          Array.from(container.children).forEach((el) => {
            if (el.classList.contains('no-print') || el.classList.contains('block-hover-controls')) return;

            // Check if it's a flex header with two .bas-header spans (e.g. THE FIRST READING | Job 38:1-7)
            if (el.classList.contains('flex') && el.classList.contains('items-baseline') && el.querySelector('.bas-header')) {
              const spans = el.querySelectorAll('.bas-header');
              if (spans.length >= 2) {
                items.push({
                  type: 'block_header',
                  text: `${spans[0].textContent.trim().toUpperCase()} — ${spans[1].textContent.trim()}`
                });
              } else if (spans.length === 1) {
                items.push({
                  type: 'block_header',
                  text: spans[0].textContent.trim().toUpperCase()
                });
              }
              return;
            }

            // Single .bas-header
            if (el.classList.contains('bas-header')) {
              items.push({ type: 'block_header', text: el.textContent.trim().toUpperCase() });
              return;
            }

            // Rubric paragraph
            if (el.classList.contains('liturgical-rubric')) {
              items.push({ type: 'rubric', text: el.textContent.trim() });
              return;
            }

            // Scripture Link Box
            const bgLink = el.querySelector && el.querySelector('a[href*="biblegateway.com"]');
            if (bgLink && el.classList.contains('border-black')) {
              const citSpan = el.querySelector('span.font-bold');
              const citationText = citSpan ? citSpan.textContent.trim() : 'Scripture Passage';
              items.push({
                type: 'scripture_link',
                citation: citationText,
                url: bgLink.getAttribute('href')
              });
              return;
            }

            // Dialogue row (Speaker + Spoken/People text)
            if (el.classList.contains('my-1.5') && el.classList.contains('flex')) {
              const spkEl = el.querySelector('span');
              const txtEl = el.querySelector('div');
              if (spkEl && txtEl) {
                const isBold = txtEl.classList.contains('response-people') || txtEl.classList.contains('font-bold');
                items.push({
                  type: 'dialogue',
                  speaker: spkEl.textContent.trim(),
                  text: txtEl.textContent.trim(),
                  bold: isBold
                });
                return;
              }
            }

            // Psalm responsive container
            if (el.classList.contains('pl-2') && el.classList.contains('space-y-1.5')) {
              Array.from(el.children).forEach((vDiv) => {
                const spans = vDiv.querySelectorAll('span');
                if (spans.length >= 2) {
                  items.push({
                    type: 'psalm_verse',
                    leader: spans[0].textContent.trim(),
                    people: spans[1].textContent.trim()
                  });
                }
              });
              return;
            }

            // Direct paragraph <p>
            if (el.tagName === 'P') {
              const strongEl = el.querySelector('strong');
              const isBold = Boolean(strongEl && strongEl.textContent.trim().length === el.textContent.trim().length) || el.classList.contains('font-bold');
              items.push({
                type: 'paragraph',
                text: el.textContent.trim(),
                bold: isBold
              });
              return;
            }

            // Centered acclamation banner
            if (el.classList.contains('text-center') && el.classList.contains('font-bold')) {
              items.push({
                type: 'paragraph',
                text: el.textContent.trim(),
                bold: true
              });
              return;
            }

            // Otherwise recurse into wrapper divs
            if (el.children && el.children.length > 0) {
              walkBlockNodes(el);
            } else if (el.textContent && el.textContent.trim().length > 0) {
              items.push({
                type: 'paragraph',
                text: el.textContent.trim(),
                bold: el.classList.contains('font-bold')
              });
            }
          });
        }

        walkBlockNodes(child);
        items.push({ type: 'spacer' });
      });

      return items;
    }

    /**
     * Minimal Pure-JS Uncompressed ZIP Builder (Store Method 0x00 + CRC32)
     * Used to package native Office Open XML (.docx) archives in the browser with zero external dependencies.
     */
    function createZipBlob(filesMap, mimeType) {
      const crcTable = new Uint32Array(256);
      for (let n = 0; n < 256; n++) {
        let c = n;
        for (let k = 0; k < 8; k++) {
          c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
        }
        crcTable[n] = c >>> 0;
      }
      function crc32(bytes) {
        let crc = 0xffffffff;
        for (let i = 0; i < bytes.length; i++) {
          crc = (crc >>> 8) ^ crcTable[(crc ^ bytes[i]) & 0xff];
        }
        return (crc ^ 0xffffffff) >>> 0;
      }

      const encoder = new TextEncoder();
      const entries = [];
      let offset = 0;

      Object.keys(filesMap).forEach((name) => {
        const nameBytes = encoder.encode(name);
        const dataBytes = typeof filesMap[name] === 'string' ? encoder.encode(filesMap[name]) : filesMap[name];
        const crc = crc32(dataBytes);
        const size = dataBytes.length;

        const localHeader = new Uint8Array(30 + nameBytes.length);
        const lv = new DataView(localHeader.buffer);
        lv.setUint32(0, 0x04034b50, true); // Local file header signature
        lv.setUint16(4, 20, true);         // Version needed to extract (2.0)
        lv.setUint16(6, 0x0800, true);     // UTF-8 filename flag
        lv.setUint16(8, 0, true);          // Compression method: 0 (Stored)
        lv.setUint16(10, 0, true);         // Last mod file time
        lv.setUint16(12, 0x5421, true);    // Last mod file date
        lv.setUint32(14, crc, true);       // CRC-32
        lv.setUint32(18, size, true);      // Compressed size
        lv.setUint32(22, size, true);      // Uncompressed size
        lv.setUint16(26, nameBytes.length, true); // Filename length
        lv.setUint16(28, 0, true);         // Extra field length
        localHeader.set(nameBytes, 30);

        entries.push({ nameBytes, dataBytes, crc, size, localHeader, offset });
        offset += localHeader.length + size;
      });

      const centralParts = [];
      let centralSize = 0;
      entries.forEach((e) => {
        const ch = new Uint8Array(46 + e.nameBytes.length);
        const cv = new DataView(ch.buffer);
        cv.setUint32(0, 0x02014b50, true); // Central directory signature
        cv.setUint16(4, 20, true);         // Version made by
        cv.setUint16(6, 20, true);         // Version needed
        cv.setUint16(8, 0x0800, true);     // UTF-8 flag
        cv.setUint16(10, 0, true);         // Compression method (0)
        cv.setUint16(12, 0, true);
        cv.setUint16(14, 0x5421, true);
        cv.setUint32(16, e.crc, true);
        cv.setUint32(20, e.size, true);
        cv.setUint32(24, e.size, true);
        cv.setUint16(28, e.nameBytes.length, true);
        cv.setUint16(30, 0, true);
        cv.setUint16(32, 0, true);
        cv.setUint16(34, 0, true);
        cv.setUint16(36, 0, true);
        cv.setUint32(38, 0, true);
        cv.setUint32(42, e.offset, true);
        ch.set(e.nameBytes, 46);
        centralParts.push(ch);
        centralSize += ch.length;
      });

      const eocd = new Uint8Array(22);
      const ev = new DataView(eocd.buffer);
      ev.setUint32(0, 0x06054b50, true); // End of central directory signature
      ev.setUint16(4, 0, true);
      ev.setUint16(6, 0, true);
      ev.setUint16(8, entries.length, true);
      ev.setUint16(10, entries.length, true);
      ev.setUint32(12, centralSize, true);
      ev.setUint32(16, offset, true);
      ev.setUint16(20, 0, true);

      const blobParts = [];
      entries.forEach((e) => {
        blobParts.push(e.localHeader);
        blobParts.push(e.dataBytes);
      });
      centralParts.forEach((cp) => blobParts.push(cp));
      blobParts.push(eocd);

      return new Blob(blobParts, { type: mimeType });
    }

    function escapeXml(str) {
      return String(str || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
    }

    /**
     * Generates and downloads a genuine Office Open XML (.docx) document with BAS formatting:
     * - White page, 1-inch margins, Georgia/Garamond serif typography
     * - Bold Black headers and communal responses
     * - Red Italicized rubrics and speaker labels (#B91C1C)
     * - Clickable external hyperlinks to Bible Gateway (NRSV)
     */
    function exportServiceDocx() {
      const items = extractStructuredServiceItems();
      const relationships = [];
      let relCounter = 1;

      function addHyperlinkRel(url) {
        const rId = 'rIdLink' + (relCounter++);
        relationships.push({ Id: rId, Target: url });
        return rId;
      }

      function makeRun(text, opts = {}) {
        const font = opts.sans ? 'Inter' : 'Georgia';
        const sizeHalfPt = opts.size || 23; // 11.5pt default
        const colorHex = opts.color || '000000';
        let rPr = `<w:rFonts w:ascii="${font}" w:hAnsi="${font}" w:cs="${font}"/>`;
        if (opts.bold) rPr += `<w:b/><w:bCs/>`;
        if (opts.italic) rPr += `<w:i/><w:iCs/>`;
        if (opts.underline) rPr += `<w:u w:val="single"/>`;
        rPr += `<w:color w:val="${colorHex}"/>`;
        rPr += `<w:sz w:val="${sizeHalfPt}"/><w:szCs w:val="${sizeHalfPt}"/>`;

        const lines = String(text || '').split('\n');
        let inner = '';
        lines.forEach((ln, idx) => {
          if (idx > 0) inner += `<w:br/>`;
          inner += `<w:t xml:space="preserve">${escapeXml(ln)}</w:t>`;
        });
        return `<w:r><w:rPr>${rPr}</w:rPr>${inner}</w:r>`;
      }

      let bodyXml = '';

      items.forEach((item) => {
        if (item.type === 'meta_parish') {
          bodyXml += `<w:p><w:pPr><w:jc w:val="center"/><w:spacing w:before="0" w:after="60"/></w:pPr>${makeRun(item.text, { bold: true, sans: true, size: 18, color: '000000' })}</w:p>`;
        } else if (item.type === 'title') {
          bodyXml += `<w:p><w:pPr><w:jc w:val="center"/><w:spacing w:before="40" w:after="80"/></w:pPr>${makeRun(item.text, { bold: true, size: 36, color: '000000' })}</w:p>`;
        } else if (item.type === 'subtitle') {
          bodyXml += `<w:p><w:pPr><w:jc w:val="center"/><w:spacing w:before="0" w:after="60"/></w:pPr>${makeRun(item.text, { bold: true, sans: true, size: 22, color: '000000' })}</w:p>`;
        } else if (item.type === 'meta_date') {
          bodyXml += `<w:p><w:pPr><w:jc w:val="center"/><w:spacing w:before="0" w:after="60"/></w:pPr>${makeRun(item.text, { bold: true, sans: true, size: 19, color: '000000' })}</w:p>`;
        } else if (item.type === 'rubric_center') {
          bodyXml += `<w:p><w:pPr><w:jc w:val="center"/><w:spacing w:before="20" w:after="160"/><w:pBdr><w:bottom w:val="single" w:sz="12" w:space="8" w:color="000000"/></w:pBdr></w:pPr>${makeRun(item.text, { italic: true, size: 19, color: 'B91C1C' })}</w:p>`;
        } else if (item.type === 'section') {
          bodyXml += `<w:p><w:pPr><w:keepNext/><w:spacing w:before="280" w:after="120"/><w:pBdr><w:bottom w:val="single" w:sz="12" w:space="4" w:color="000000"/></w:pBdr></w:pPr>${makeRun(item.text, { bold: true, size: 26, color: '000000' })}</w:p>`;
        } else if (item.type === 'block_header') {
          bodyXml += `<w:p><w:pPr><w:keepNext/><w:spacing w:before="160" w:after="60"/></w:pPr>${makeRun(item.text, { bold: true, sans: true, size: 19, color: '000000' })}</w:p>`;
        } else if (item.type === 'rubric') {
          bodyXml += `<w:p><w:pPr><w:spacing w:before="60" w:after="60"/></w:pPr>${makeRun(item.text, { italic: true, size: 21, color: 'B91C1C' })}</w:p>`;
        } else if (item.type === 'dialogue') {
          bodyXml += `<w:p><w:pPr><w:spacing w:before="60" w:after="60"/><w:ind w:left="1440" w:hanging="1440"/></w:pPr>${makeRun(item.speaker + '\t', { italic: true, size: 21, color: 'B91C1C' })}${makeRun(item.text, { bold: item.bold, size: 23, color: '000000' })}</w:p>`;
        } else if (item.type === 'psalm_verse') {
          bodyXml += `<w:p><w:pPr><w:spacing w:before="40" w:after="20"/></w:pPr>${makeRun(item.leader, { bold: false, size: 23, color: '000000' })}</w:p>`;
          bodyXml += `<w:p><w:pPr><w:spacing w:before="0" w:after="60"/><w:ind w:left="480"/></w:pPr>${makeRun(item.people, { bold: true, size: 23, color: '000000' })}</w:p>`;
        } else if (item.type === 'scripture_link') {
          const rId = addHyperlinkRel(item.url);
          bodyXml += `<w:p><w:pPr><w:spacing w:before="100" w:after="100"/><w:ind w:left="360"/></w:pPr>${makeRun(item.citation + ' (NRSV) — ', { bold: true, size: 22, color: '000000' })}<w:hyperlink r:id="${rId}" w:history="1">${makeRun('Read Full Passage on Bible Gateway (NRSV)', { bold: true, underline: true, size: 21, color: 'B91C1C' })}</w:hyperlink></w:p>`;
        } else if (item.type === 'paragraph') {
          bodyXml += `<w:p><w:pPr><w:spacing w:before="80" w:after="80"/></w:pPr>${makeRun(item.text, { bold: item.bold, size: 23, color: '000000' })}</w:p>`;
        }
      });

      const contentTypesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
</Types>`;

      const rootRelsXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>`;

      let docRelsItems = `<Relationship Id="rIdStyles" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>`;
      relationships.forEach((rel) => {
        docRelsItems += `\n  <Relationship Id="${rel.Id}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink" Target="${escapeXml(rel.Target)}" TargetMode="External"/>`;
      });

      const wordRelsXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  ${docRelsItems}
</Relationships>`;

      const stylesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:docDefaults>
    <w:rPrDefault>
      <w:rPr>
        <w:rFonts w:ascii="Georgia" w:hAnsi="Georgia" w:cs="Georgia"/>
        <w:color w:val="000000"/>
        <w:sz w:val="23"/>
        <w:szCs w:val="23"/>
      </w:rPr>
    </w:rPrDefault>
  </w:docDefaults>
</w:styles>`;

      const documentXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <w:body>
    ${bodyXml}
    <w:sectPr>
      <w:pgSz w:w="12240" w:h="15840"/>
      <w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440" w:header="720" w:footer="720" w:gutter="0"/>
    </w:sectPr>
  </w:body>
</w:document>`;

      const blob = createZipBlob({
        '[Content_Types].xml': contentTypesXml,
        '_rels/.rels': rootRelsXml,
        'word/_rels/document.xml.rels': wordRelsXml,
        'word/styles.xml': stylesXml,
        'word/document.xml': documentXml
      }, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `digitalbas-service-${appState.selectedDayKey}.docx`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast('Downloaded Word document (.docx)!');
    }

    /**
     * Generates and downloads a print-ready Vector PDF 1.4 document (.pdf) with BAS colouration:
     * - Pure White US Letter pages (612 x 792 pt)
     * - Built-in PostScript Type1 Fonts: Times-Roman (/F1), Times-Bold (/F2), Times-Italic (/F3), Helvetica-Bold (/F4)
     * - Bold Black headers and congregational responses (0 0 0 rg)
     * - Red Italicized rubrics and speaker labels (0.725 0.11 0.11 rg = #B91C1C)
     * - Clickable PDF URI Link annotations for Bible Gateway (NRSV) passages
     */
    function exportServicePdf() {
      const items = extractStructuredServiceItems();
      const pageWidth = 612;
      const pageHeight = 792;
      const marginLeft = 54;
      const marginRight = 54;
      const marginTop = 54;
      const marginBottom = 54;
      const contentWidth = pageWidth - marginLeft - marginRight;

      // Normalize Unicode punctuation to WinAnsi (Windows-1252) safe characters for Type1 PDF fonts
      function toWinAnsiSafe(str) {
        return String(str || '')
          .replace(/[\u2018\u2019]/g, "'")
          .replace(/[\u201C\u201D]/g, '"')
          .replace(/\u2013/g, '-')
          .replace(/\u2014/g, '--')
          .replace(/\u2022/g, '*')
          .replace(/\u2026/g, '...')
          .replace(/\u2197/g, '')
          .replace(/[^\x20-\x7E\xA0-\xFF]/g, '');
      }

      function escapePdfText(str) {
        return toWinAnsiSafe(str)
          .replace(/\\/g, '\\\\')
          .replace(/\(/g, '\\(')
          .replace(/\)/g, '\\)');
      }

      function wrapTextLines(text, fontSize, availWidth) {
        const avgCharWidth = fontSize * 0.47;
        const maxChars = Math.max(20, Math.floor(availWidth / avgCharWidth));
        const paragraphs = String(text || '').split('\n');
        const lines = [];
        paragraphs.forEach((para) => {
          const words = para.split(/\s+/).filter(Boolean);
          if (words.length === 0) {
            lines.push('');
            return;
          }
          let cur = words[0];
          for (let i = 1; i < words.length; i++) {
            if ((cur + ' ' + words[i]).length <= maxChars) {
              cur += ' ' + words[i];
            } else {
              lines.push(cur);
              cur = words[i];
            }
          }
          lines.push(cur);
        });
        return lines;
      }

      const pages = [];
      let currentOps = [];
      let currentLinks = [];
      let y = pageHeight - marginTop;

      function startNewPage() {
        if (currentOps.length > 0) {
          pages.push({ ops: currentOps, links: currentLinks });
        }
        currentOps = [];
        currentLinks = [];
        y = pageHeight - marginTop;
      }

      function ensureSpace(neededHeight) {
        if (y - neededHeight < marginBottom) {
          startNewPage();
        }
      }

      function drawTextLine(text, x, yPos, fontRef, fontSize, colorRgb) {
        const [r, g, b] = colorRgb;
        currentOps.push(`BT /${fontRef} ${fontSize} Tf ${r} ${g} ${b} rg 1 0 0 1 ${x.toFixed(2)} ${yPos.toFixed(2)} Tm (${escapePdfText(text)}) Tj ET`);
      }

      const BLACK = [0, 0, 0];
      const RUBRIC_RED = [0.725, 0.11, 0.11];

      items.forEach((item) => {
        if (item.type === 'meta_parish') {
          ensureSpace(18);
          const txt = toWinAnsiSafe(item.text);
          const x = Math.max(marginLeft, (pageWidth - txt.length * 5.2) / 2);
          drawTextLine(txt, x, y, 'F4', 9, BLACK);
          y -= 16;
        } else if (item.type === 'title') {
          ensureSpace(26);
          const txt = toWinAnsiSafe(item.text);
          const x = Math.max(marginLeft, (pageWidth - txt.length * 8.5) / 2);
          drawTextLine(txt, x, y, 'F2', 17, BLACK);
          y -= 20;
        } else if (item.type === 'subtitle') {
          ensureSpace(18);
          const txt = toWinAnsiSafe(item.text);
          const x = Math.max(marginLeft, (pageWidth - txt.length * 5.5) / 2);
          drawTextLine(txt, x, y, 'F2', 11, BLACK);
          y -= 15;
        } else if (item.type === 'meta_date') {
          ensureSpace(16);
          const txt = toWinAnsiSafe(item.text);
          const x = Math.max(marginLeft, (pageWidth - txt.length * 5.0) / 2);
          drawTextLine(txt, x, y, 'F2', 9.5, BLACK);
          y -= 14;
        } else if (item.type === 'rubric_center') {
          ensureSpace(22);
          const txt = toWinAnsiSafe(item.text);
          const x = Math.max(marginLeft, (pageWidth - txt.length * 4.5) / 2);
          drawTextLine(txt, x, y, 'F3', 9.5, RUBRIC_RED);
          y -= 10;
          currentOps.push(`0 0 0 RG 1.2 w ${marginLeft} ${y.toFixed(2)} m ${pageWidth - marginRight} ${y.toFixed(2)} l S`);
          y -= 16;
        } else if (item.type === 'section') {
          ensureSpace(34);
          y -= 8;
          drawTextLine(item.text, marginLeft, y, 'F4', 11.5, BLACK);
          y -= 5;
          currentOps.push(`0 0 0 RG 1 w ${marginLeft} ${y.toFixed(2)} m ${pageWidth - marginRight} ${y.toFixed(2)} l S`);
          y -= 14;
        } else if (item.type === 'block_header') {
          ensureSpace(24);
          y -= 4;
          drawTextLine(item.text, marginLeft, y, 'F4', 9.5, BLACK);
          y -= 13;
        } else if (item.type === 'rubric') {
          const lines = wrapTextLines(item.text, 10, contentWidth);
          ensureSpace(lines.length * 13 + 4);
          lines.forEach((ln) => {
            drawTextLine(ln, marginLeft, y, 'F3', 10, RUBRIC_RED);
            y -= 13;
          });
          y -= 2;
        } else if (item.type === 'dialogue') {
          const spkWidth = 86;
          const bodyFont = item.bold ? 'F2' : 'F1';
          const lines = wrapTextLines(item.text, 10.5, contentWidth - spkWidth);
          ensureSpace(lines.length * 14 + 4);
          drawTextLine(item.speaker, marginLeft, y, 'F3', 10, RUBRIC_RED);
          lines.forEach((ln) => {
            drawTextLine(ln, marginLeft + spkWidth, y, bodyFont, 10.5, BLACK);
            y -= 14;
          });
          y -= 2;
        } else if (item.type === 'psalm_verse') {
          const lLines = wrapTextLines(item.leader, 10.5, contentWidth - 12);
          const pLines = wrapTextLines(item.people, 10.5, contentWidth - 30);
          ensureSpace((lLines.length + pLines.length) * 13.5 + 4);
          lLines.forEach((ln) => {
            drawTextLine(ln, marginLeft + 8, y, 'F1', 10.5, BLACK);
            y -= 13.5;
          });
          pLines.forEach((ln) => {
            drawTextLine(ln, marginLeft + 26, y, 'F2', 10.5, BLACK);
            y -= 13.5;
          });
          y -= 2;
        } else if (item.type === 'scripture_link') {
          ensureSpace(24);
          const labelTxt = `${item.citation} (NRSV) — `;
          const linkTxt = `Read Full Passage on Bible Gateway (NRSV)`;
          drawTextLine(labelTxt, marginLeft + 12, y, 'F2', 10.5, BLACK);
          const linkX = marginLeft + 12 + toWinAnsiSafe(labelTxt).length * 5.2;
          drawTextLine(linkTxt, linkX, y, 'F3', 10.5, RUBRIC_RED);
          const linkW = toWinAnsiSafe(linkTxt).length * 5.0;
          currentLinks.push({
            rect: [linkX, y - 3, linkX + linkW, y + 11],
            url: item.url
          });
          y -= 16;
        } else if (item.type === 'paragraph') {
          const fontRef = item.bold ? 'F2' : 'F1';
          const lines = wrapTextLines(item.text, 10.5, contentWidth);
          ensureSpace(lines.length * 14 + 4);
          lines.forEach((ln) => {
            drawTextLine(ln, marginLeft, y, fontRef, 10.5, BLACK);
            y -= 14;
          });
          y -= 3;
        } else if (item.type === 'spacer') {
          y -= 4;
        }
      });

      if (currentOps.length > 0) {
        pages.push({ ops: currentOps, links: currentLinks });
      }

      // Assemble PDF 1.4 objects
      const objects = [];
      function addObj(content) {
        objects.push(content);
        return objects.length;
      }

      const font1Id = addObj(`<< /Type /Font /Subtype /Type1 /BaseFont /Times-Roman /Encoding /WinAnsiEncoding >>`);
      const font2Id = addObj(`<< /Type /Font /Subtype /Type1 /BaseFont /Times-Bold /Encoding /WinAnsiEncoding >>`);
      const font3Id = addObj(`<< /Type /Font /Subtype /Type1 /BaseFont /Times-Italic /Encoding /WinAnsiEncoding >>`);
      const font4Id = addObj(`<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>`);
      const pagesRootId = addObj(''); // placeholder for /Pages root

      const pageIds = [];
      const totalPages = pages.length;

      pages.forEach((pg, idx) => {
        const footerTxt = `Page ${idx + 1} of ${totalPages}  •  The Book of Alternative Services (1985)`;
        pg.ops.push(`BT /F3 8.5 Tf 0.725 0.11 0.11 rg 1 0 0 1 ${marginLeft} 28 Tm (${escapePdfText(footerTxt)}) Tj ET`);
        const streamStr = pg.ops.join('\n');
        const contentId = addObj(`<< /Length ${streamStr.length} >>\nstream\n${streamStr}\nendstream`);

        const annotIds = pg.links.map((lnk) => {
          const [x1, y1, x2, y2] = lnk.rect.map((n) => n.toFixed(2));
          return addObj(`<< /Type /Annot /Subtype /Link /Rect [${x1} ${y1} ${x2} ${y2}] /Border [0 0 0] /A << /Type /Action /S /URI /URI (${escapePdfText(lnk.url)}) >> >>`);
        });

        const annotsEntry = annotIds.length > 0 ? `/Annots [${annotIds.map((id) => id + ' 0 R').join(' ')}]` : '';
        const pageId = addObj(`<< /Type /Page /Parent ${pagesRootId} 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 ${font1Id} 0 R /F2 ${font2Id} 0 R /F3 ${font3Id} 0 R /F4 ${font4Id} 0 R >> >> /Contents ${contentId} 0 R ${annotsEntry} >>`);
        pageIds.push(pageId);
      });

      objects[pagesRootId - 1] = `<< /Type /Pages /Kids [${pageIds.map((id) => id + ' 0 R').join(' ')}] /Count ${pageIds.length} >>`;
      const catalogId = addObj(`<< /Type /Catalog /Pages ${pagesRootId} 0 R >>`);

      let pdfOut = '%PDF-1.4\n';
      const offsets = [0];
      objects.forEach((objContent, i) => {
        offsets.push(pdfOut.length);
        pdfOut += `${i + 1} 0 obj\n${objContent}\nendobj\n`;
      });

      const xrefOffset = pdfOut.length;
      pdfOut += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
      for (let i = 1; i <= objects.length; i++) {
        pdfOut += String(offsets[i]).padStart(10, '0') + ' 00000 n \n';
      }
      pdfOut += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

      const blob = new Blob([pdfOut], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `digitalbas-service-${appState.selectedDayKey}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast('Downloaded service PDF (.pdf)!');
    }


    function rubric(text) {
      if (!appState.showRubrics || !text) return '';
      return `<p class="liturgical-rubric">${text}</p>`;
    }

    function dialogue(speaker, text, isPeople = false) {
      if (!text) return '';
      return `
        <div class="my-1.5 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
          <span class="text-sm italic font-serif text-rubric min-w-[6.5rem] flex-shrink-0">${speaker}</span>
          <div class="flex-1 ${isPeople ? 'response-people font-bold text-black' : 'text-black'} whitespace-pre-line">${text}</div>
        </div>
      `;
    }

    function getProperPrefaceText(day) {
      const key = appState.preface === 'auto' ? (day.prefaceKey || 'lords_day') : appState.preface;
      return PROPER_PREFACES[key] || PROPER_PREFACES.lords_day;
    }

    function renderCustomBlockHtml(data) {
      let out = `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">${data.heading}</div>`;
      if (data.rubric) out += rubric(data.rubric);
      if (data.body) {
        if (data.speaker) {
          out += dialogue(data.speaker, data.body, data.speaker.toLowerCase() === 'all' || data.speaker.toLowerCase() === 'people');
        } else {
          out += `<div class="my-2 text-black whitespace-pre-line">${data.body}</div>`;
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


      if (id === 'baptism_presentation') {
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">Presentation and Examination of the Candidates (BAS p. 153)</div>`;
        h += rubric('The celebrant, candidates, parents, and sponsors gather at the baptismal font.');
        h += dialogue('Celebrant', 'The candidate(s) for Holy Baptism will now be presented.');
        h += rubric('For Adult & Older Child Candidates:');
        h += dialogue('Sponsor', 'I present N. to receive the sacrament of baptism.');
        h += dialogue('Celebrant', 'Do you desire to be baptized?');
        h += dialogue('Candidate', 'I do.');
        h += rubric('For Infants and Young Children, the parents and sponsors say:');
        h += dialogue('Parents & Sponsors', 'I present N. to receive the sacrament of baptism.');
        h += dialogue('Celebrant', 'Will you be responsible for seeing that the child you present is nurtured in the faith and life of the Christian community?');
        h += dialogue('Parents & Sponsors', 'I will, with God\'s help.', true);
        h += dialogue('Celebrant', 'Will you by your prayers and witness help this child to grow into the full stature of Christ?');
        h += dialogue('Parents & Sponsors', 'I will, with God\'s help.', true);
        h += `<div class="mt-3 pt-2 border-t border-stone-200/60">`;
        h += rubric('Then the celebrant asks the candidates, or the parents and sponsors who speak on behalf of infants:');
        h += dialogue('Celebrant', 'Do you renounce Satan and all the spiritual forces of wickedness that rebel against God?');
        h += dialogue('Answer', 'I renounce them.', true);
        h += dialogue('Celebrant', 'Do you renounce the evil powers of this world which corrupt and destroy the creatures of God?');
        h += dialogue('Answer', 'I renounce them.', true);
        h += dialogue('Celebrant', 'Do you renounce all sinful desires that draw you from the love of God?');
        h += dialogue('Answer', 'I renounce them.', true);
        h += dialogue('Celebrant', 'Do you turn to Jesus Christ and accept him as your Saviour?');
        h += dialogue('Answer', 'I do.', true);
        h += dialogue('Celebrant', 'Do you put your whole trust in his grace and love?');
        h += dialogue('Answer', 'I do.', true);
        h += dialogue('Celebrant', 'Do you promise to obey him as your Lord?');
        h += dialogue('Answer', 'I do.', true);
        h += rubric('The celebrant addresses the congregation:');
        h += dialogue('Celebrant', 'Will you who witness these vows do all in your power to support these persons in their life in Christ?');
        h += dialogue('People', 'We will.', true);
        h += `</div>`;
        return h;
      }

      if (id === 'baptism_prayers_covenant') {
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">Prayers for the Candidates &amp; The Baptismal Covenant (BAS pp. 156–159)</div>`;
        h += rubric('All stand as the celebrant invites the people to pray for the candidates and renew the Baptismal Covenant.');
        h += dialogue('Leader', 'Let us now pray for these persons who are to receive the sacrament of new birth [or renew their baptismal commitment].');
        h += dialogue('Leader', 'Deliver them, O Lord, from the way of sin and death.');
        h += dialogue('People', 'Lord, hear our prayer.', true);
        h += dialogue('Leader', 'Open their hearts to your grace and truth.');
        h += dialogue('People', 'Lord, hear our prayer.', true);
        h += dialogue('Leader', 'Fill them with your holy and life-giving Spirit.');
        h += dialogue('People', 'Lord, hear our prayer.', true);
        h += dialogue('Leader', 'Teach them to love others in the power of the Spirit.');
        h += dialogue('People', 'Lord, hear our prayer.', true);
        h += dialogue('Leader', 'Send them into the world in witness to your love.');
        h += dialogue('People', 'Lord, hear our prayer.', true);
        h += dialogue('Leader', 'Bring them to the fullness of your peace and glory.');
        h += dialogue('People', 'Lord, hear our prayer.', true);
        h += `<div class="my-3 bg-white py-2 space-y-1.5">`;
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">The Baptismal Covenant (BAS p. 158)</div>`;
        h += dialogue('Celebrant', 'Do you believe in God the Father?');
        h += dialogue('People', 'I believe in God, the Father almighty, creator of heaven and earth.', true);
        h += dialogue('Celebrant', 'Do you believe in Jesus Christ, the Son of God?');
        h += dialogue('People', 'I believe in Jesus Christ, his only Son, our Lord. He was conceived by the power of the Holy Spirit and born of the Virgin Mary. He suffered under Pontius Pilate, was crucified, died, and was buried. He descended to the dead. On the third day he rose again. He ascended into heaven, and is seated at the right hand of the Father. He will come again to judge the living and the dead.', true);
        h += dialogue('Celebrant', 'Do you believe in God the Holy Spirit?');
        h += dialogue('People', 'I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and the life everlasting.', true);
        h += dialogue('Celebrant', 'Will you continue in the apostles\' teaching and fellowship, in the breaking of bread, and in the prayers?');
        h += dialogue('People', 'I will, with God\'s help.', true);
        h += dialogue('Celebrant', 'Will you persevere in resisting evil and, whenever you fall into sin, repent and return to the Lord?');
        h += dialogue('People', 'I will, with God\'s help.', true);
        h += dialogue('Celebrant', 'Will you proclaim by word and example the good news of God in Christ?');
        h += dialogue('People', 'I will, with God\'s help.', true);
        h += dialogue('Celebrant', 'Will you seek and serve Christ in all persons, loving your neighbour as yourself?');
        h += dialogue('People', 'I will, with God\'s help.', true);
        h += dialogue('Celebrant', 'Will you strive for justice and peace among all people, and respect the dignity of every human being?');
        h += dialogue('People', 'I will, with God\'s help.', true);
        h += dialogue('Celebrant', 'Will you strive to safeguard the integrity of God\'s creation, and respect, sustain, and renew the life of the earth?');
        h += dialogue('People', 'I will, with God\'s help.', true);
        h += `</div>`;
        return h;
      }

      if (id === 'baptism_water_thanksgiving') {
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">Thanksgiving over the Water (BAS p. 160)</div>`;
        h += rubric('Water is poured into the font. The celebrant leads the Thanksgiving over the Water.');
        h += dialogue('Celebrant', 'The Lord be with you.');
        h += dialogue('People', 'And also with you.', true);
        h += dialogue('Celebrant', 'Let us give thanks to the Lord our God.');
        h += dialogue('People', 'It is right to give our thanks and praise.', true);
        h += `<div class="my-2 space-y-2 text-black">
          <p>We thank you, Almighty God, for the gift of water. Over water the Holy Spirit moved in the beginning of creation. Through water you led the children of Israel out of their bondage in Egypt into the land of promise. In water your Son Jesus received the baptism of John and was anointed by the Holy Spirit as the Messiah, the Christ, to lead us, through his death and resurrection, from the bondage of sin into everlasting life.</p>
          <p>We thank you, Father, for the water of baptism. In it we are buried with Christ in his death. By it we share in his resurrection. Through it we are reborn by the Holy Spirit. Therefore in joyful obedience to your Son, we bring into his fellowship those who come to him in faith, baptizing them in the name of the Father, and of the Son, and of the Holy Spirit.</p>
          <p>Now sanctify this water by the power of your Holy Spirit, that those who here are cleansed from sin and born again may continue for ever in the risen life of Jesus Christ our Saviour. To him, to you, and to the Holy Spirit, be all honour and glory, now and for ever.</p>
        </div>`;
        h += dialogue('People', 'Amen.', true);
        return h;
      }

      if (id === 'baptism_act_welcome') {
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">The Baptism, Chrismation, Giving of the Light &amp; Welcome (BAS pp. 161–162)</div>`;
        h += rubric('Each candidate is presented by name to the celebrant, who pours water upon them three times, saying:');
        h += dialogue('Celebrant', 'N., I baptize you in the name of the Father, and of the Son, and of the Holy Spirit.');
        h += dialogue('People', 'Amen.', true);
        h += rubric('The celebrant makes the sign of the cross on the forehead of the newly baptized (using Chrism if desired), saying:');
        h += dialogue('Celebrant', 'I sign you with the cross, and mark you as Christ\'s own for ever.');
        h += dialogue('People', 'Amen.', true);
        h += rubric('The celebrant gives to each of the newly baptized (or a sponsor) a lighted candle from the Paschal Candle, saying:');
        h += dialogue('Celebrant', 'Receive the light of Christ, to show that you have passed from darkness to light.');
        h += dialogue('People', 'Let your light so shine before others that they may see your good works and glorify your Father in heaven.', true);
        h += `<div class="mt-3 pt-2 border-t border-stone-200/60">`;
        h += dialogue('Celebrant', 'Let us welcome the newly baptized.');
        h += dialogue('All', 'We receive you into the household of God. Confess the faith of Christ crucified, proclaim his resurrection, and share with us in his eternal priesthood.', true);
        h += `</div>`;
        return h;
      }

      if (id === 'confirmation_presentation') {
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">Presentation of Candidates for Confirmation, Reception &amp; Reaffirmation (BAS p. 625)</div>`;
        h += rubric('The candidates and presenters stand before the Bishop.');
        h += dialogue('Presenter', 'I present these persons for Confirmation [or to be received into this Communion / to reaffirm their baptismal vows].');
        h += dialogue('Bishop', 'Do you reaffirm your renunciation of evil?');
        h += dialogue('Candidates', 'I do.', true);
        h += dialogue('Bishop', 'Do you renew your commitment to Jesus Christ?');
        h += dialogue('Candidates', 'I do, and with God\'s grace I will follow him as my Saviour and Lord.', true);
        h += rubric('The Bishop addresses the congregation:');
        h += dialogue('Bishop', 'Will you who witness these vows do all in your power to support these persons in their life in Christ?');
        h += dialogue('People', 'We will.', true);
        return h;
      }

      if (id === 'confirmation_laying_hands') {
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">Prayer for the Spirit &amp; The Laying on of Hands (BAS pp. 627–628)</div>`;
        h += rubric('The Bishop stands and extends hands towards the candidates.');
        h += dialogue('Bishop', 'Almighty God, we thank you that by the death and resurrection of your Son Jesus Christ you have overcome sin and brought us to yourself, and that by the sealing of your Holy Spirit you have bound us to your service. Renew in these your servants the covenant you made with them at their baptism. Send them forth in the power of that Spirit to perform the service you set before them; through Jesus Christ your Son our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever.');
        h += dialogue('People', 'Amen.', true);
        h += rubric('For Confirmation, the Bishop lays hands upon each candidate and says:');
        h += `<div class="my-2 bg-white py-2 space-y-2">
          ${dialogue('Bishop', 'Strengthen, O Lord, your servant N. with your Holy Spirit; empower him/her for your service; and sustain him/her all the days of his/her life.')}
          <div class="text-xs text-stone-500 italic">or</div>
          ${dialogue('Bishop', 'Defend, O Lord, your servant N. with your heavenly grace, that he/she may continue yours for ever, and daily increase in your Holy Spirit more and more, until he/she comes to your everlasting kingdom.')}
          ${dialogue('People', 'Amen.', true)}
        </div>`;
        h += rubric('For Reception into the Anglican Communion:');
        h += dialogue('Bishop', 'N., we recognize you as a member of the one, holy, catholic, and apostolic Church, and we receive you into the fellowship of this Communion. God, the Father, Son, and Holy Spirit, bless, preserve, and keep you.');
        h += rubric('For Reaffirmation of Baptismal Vows:');
        h += dialogue('Bishop', 'N., may the Holy Spirit, who has begun a good work in you, direct and uphold you in the service of Christ and his kingdom.');
        h += dialogue('People', 'Amen.', true);
        return h;
      }

      if (id === 'marriage_exhortation') {
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">The Gathering &amp; Address on Christian Marriage (BAS p. 528)</div>`;
        h += rubric('The bride and groom stand before the celebrant with their witnesses.');
        h += dialogue('Celebrant', 'The grace of our Lord Jesus Christ, and the love of God, and the fellowship of the Holy Spirit, be with you all.');
        h += dialogue('People', 'And also with you.', true);
        h += `<div class="my-2 space-y-2 text-black">
          <p>Dear friends, we have come together in the presence of God to witness the marriage of N. and N., and to rejoice with them. Marriage is a gift of God and a means of his grace, in which man and woman become one flesh. It is God's purpose that, as husband and wife give themselves to each other in love, they shall grow together and be united in that love, as Christ is united with his Church.</p>
          <p>Therefore, marriage is not to be entered into lightly or selfishly, but reverently, responsibly, and after serious thought. Into this holy union N. and N. now come to be joined. If anyone present knows of any reason why these persons may not lawfully marry, they must declare it now.</p>
        </div>`;
        return h;
      }

      if (id === 'marriage_declaration') {
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">The Declaration of Intent (BAS p. 529)</div>`;
        h += rubric('The celebrant addresses the woman and the man individually:');
        h += dialogue('Celebrant', 'N., will you give yourself to N. to be her husband / his wife: to live together in the covenant of marriage? Will you love him/her, comfort him/her, honour and keep him/her, in sickness and in health; and, forsaking all others, be faithful to him/her so long as you both shall live?');
        h += dialogue('Bride / Groom', 'I will.', true);
        h += rubric('The celebrant addresses the families and congregation:');
        h += dialogue('Celebrant', 'Will all of you who witness these vows do all in your power to support these two persons in their marriage?');
        h += dialogue('People', 'We will.', true);
        return h;
      }

      if (id === 'marriage_vows') {
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">The Exchange of Vows (BAS p. 533)</div>`;
        h += rubric('The bride and groom face each other and join hands.');
        h += `<div class="my-2 bg-white py-2 space-y-2 text-black">
          ${dialogue('Groom', 'In the presence of God and before this community, I, N., take you, N., to be my wife; to have and to hold from this day forward, for better, for worse, for richer, for poorer, in sickness and in health, to love and to cherish, for the rest of our lives, according to God\'s holy law. This is my solemn vow.', true)}
          ${dialogue('Bride', 'In the presence of God and before this community, I, N., take you, N., to be my husband; to have and to hold from this day forward, for better, for worse, for richer, for poorer, in sickness and in health, to love and to cherish, for the rest of our lives, according to God\'s holy law. This is my solemn vow.', true)}
        </div>`;
        return h;
      }

      if (id === 'marriage_rings') {
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">The Giving of Rings &amp; Proclamation of Marriage (BAS p. 534)</div>`;
        h += rubric('The celebrant blesses the rings:');
        h += dialogue('Celebrant', 'Bless, O Lord, these rings to be signs of the vows by which this man and this woman have bound themselves to each other; through Jesus Christ our Lord.');
        h += dialogue('People', 'Amen.', true);
        h += rubric('The giver places the ring on the ring-finger of the other\'s hand and says:');
        h += dialogue('Each', 'N., I give you this ring as a symbol of my vow, and with all that I am, and all that I have, I honour you, in the name of the Father, and of the Son, and of the Holy Spirit.', true);
        h += rubric('The bride and groom join hands. The celebrant proclaims:');
        h += dialogue('Celebrant', 'N. and N. have joined themselves to each other by solemn vows, signified by the joining of hands and the giving and receiving of rings. I declare that they are husband and wife, in the name of the Father, and of the Son, and of the Holy Spirit. Those whom God has joined together let no one put asunder.');
        h += dialogue('People', 'Amen.', true);
        return h;
      }

      if (id === 'marriage_blessing') {
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">The Nuptial Blessing (BAS p. 536)</div>`;
        h += rubric('The husband and wife kneel or stand before the celebrant.');
        h += `<div class="my-2 space-y-2 text-black">
          <p>Most gracious God, we give you thanks for your tender love in making us in your image, and calling us to mutual love and service. We thank you for setting the covenant of marriage in the heart of your creation as a sign of Christ's faithful love for his Church.</p>
          <p>Look with favour upon N. and N., whom you have united in marriage this day. Give them wisdom and devotion in the ordering of their common life, that each may be to the other a strength in need, a counsellor in perplexity, a comfort in sorrow, and a companion in joy. Grant that their wills may be so knit together in your will, and their spirits in your Spirit, that they may grow in love and peace with you and one another all the days of their life.</p>
          <p>God the Father, God the Son, God the Holy Spirit, bless, preserve, and keep you; the Lord mercifully with his favour look upon you, and fill you with all spiritual benediction and grace; that you may faithfully live together in this life, and in the age to come have life everlasting.</p>
        </div>`;
        h += dialogue('People', 'Amen.', true);
        return h;
      }

      if (id === 'marriage_signing') {
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">Signing of the Marriage Register</div>`;
        h += rubric('The bride, groom, witnesses, and officiating minister sign the marriage register while music or an anthem is offered.');
        return h;
      }

      if (id === 'funeral_reception') {
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">Reception of the Body &amp; Opening Sentences (BAS p. 571)</div>`;
        h += rubric('The minister meets the body at the entrance of the church. A pall may be placed upon the coffin, and the Paschal Candle stands near it.');
        h += `<div class="my-2 bg-white py-2 space-y-2 text-black">
          <p><strong>I am the resurrection and the life, says the Lord; whoever lives and believes in me shall never die, andatus though they die, yet shall they live.</strong> (John 11:25-26)</p>
          <p><strong>For none of us lives to himself, and none of us dies to himself. If we live, we live to the Lord, and if we die, we die to the Lord; so then, whether we live or whether we die, we are the Lord's.</strong> (Romans 14:7-8)</p>
          <p><strong>Blessed are the dead who die in the Lord; even so, says the Spirit, for they rest from their labours.</strong> (Revelation 14:13)</p>
        </div>`.replace("andatus ", "");
        return h;
      }

      if (id === 'funeral_eulogy') {
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">Words of Remembrance / Tribute</div>`;
        h += rubric('A family member or friend may offer brief words of remembrance and thanksgiving for the life of N.');
        return h;
      }

      if (id === 'funeral_prayers') {
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">The Funeral Litany &amp; Thanksgiving (BAS p. 579)</div>`;
        h += rubric('The people stand or kneel as able.');
        h += dialogue('Leader', 'Let us pray to our Lord Jesus Christ who said, "I am the resurrection and the life."');
        h += dialogue('Leader', 'Lord, you consoled Martha and Mary in their distress; draw near to us who mourn for N., and dry the tears of those who weep.');
        h += dialogue('People', 'Hear us, Lord.', true);
        h += dialogue('Leader', 'You wept at the grave of Lazarus, your friend; comfort us in our sorrow.');
        h += dialogue('People', 'Hear us, Lord.', true);
        h += dialogue('Leader', 'You raised the dead to life; give to our brother/sister eternal life.');
        h += dialogue('People', 'Hear us, Lord.', true);
        h += dialogue('Leader', 'You promised paradise to the repentant thief; bring N. to the joys of heaven.');
        h += dialogue('People', 'Hear us, Lord.', true);
        h += dialogue('Leader', 'Our brother/sister was washed in baptism and anointed with the Holy Spirit; give him/her fellowship with all your saints.');
        h += dialogue('People', 'Hear us, Lord.', true);
        h += dialogue('Leader', 'Comfort us in our sorrow at the death of our brother/sister; let our faith be our consolation, and eternal life our hope.');
        h += dialogue('People', 'Amen.', true);
        return h;
      }

      if (id === 'funeral_commendation') {
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">The Commendation (BAS p. 582)</div>`;
        h += rubric('The celebrant and assisting ministers take their places at the coffin. All stand.');
        h += `<div class="my-2 bg-white py-2 space-y-1.5 text-black">
          ${dialogue('Celebrant', 'Give rest, O Christ, to your servant with your saints,')}
          ${dialogue('People', 'Where sorrow and pain are no more, neither sighing, but life everlasting.', true)}
          ${dialogue('Celebrant', 'You only are immortal, the creator and maker of all; and we are mortal, formed of the earth, and to earth shall we return. For so did you ordain when you created me, saying, "You are dust, and to dust you shall return." All of us go down to the dust; yet even at the grave we make our song: Alleluia, alleluia, alleluia.')}
          ${dialogue('People', 'Give rest, O Christ, to your servant with your saints, where sorrow and pain are no more, neither sighing, but life everlasting.', true)}
        </div>`;
        h += rubric('The celebrant faces the body and says the Prayer of Commendation:');
        h += `<p class="my-2 text-black">Into your hands, O merciful Saviour, we commend your servant N. Acknowledge, we humbly beseech you, a sheep of your own fold, a lamb of your own flock, a sinner of your own redeeming. Receive him/her into the arms of your mercy, into the blessed rest of everlasting peace, and into the glorious company of the saints in light.</p>`;
        h += dialogue('People', 'Amen.', true);
        h += rubric('As the body is borne from the church, the Song of Simeon (Nunc Dimittis) or "In Paradisum" may be sung or said:');
        h += `<p class="font-bold text-black mt-2">May the angels lead you into paradise; may the martyrs come to welcome you and take you to the holy city, the new and eternal Jerusalem.</p>`;
        return h;
      }

      if (id === 'funeral_committal') {
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">The Committal (BAS p. 585)</div>`;
        h += rubric('At the graveside, columbarium, or crematorium, the celebrant says:');
        h += `<p class="my-2 text-black">In the midst of life we are in death; from whom can we seek help? From you alone, O Lord, who by our sins are justly angered.<strong> Holy God, holy and mighty, holy and merciful Saviour, deliver us not into the bitterness of eternal death.</strong></p>`;
        h += rubric('Earth may be cast upon the coffin as the celebrant says the Words of Committal:');
        h += `<div class="my-2 bg-white py-2 text-black">
          <p>In sure and certain hope of the resurrection to eternal life through our Lord Jesus Christ, we commend to Almighty God our brother/sister N., and we commit his/her body to the ground [or the deep / the elements / its resting place]; <strong>earth to earth, ashes to ashes, dust to dust.</strong> The Lord bless him/her and keep him/her, the Lord make his face to shine upon him/her and be gracious to him/her, the Lord lift up his countenance upon him/her and give him/her peace.</p>
        </div>`;
        h += dialogue('People', 'Amen.', true);
        h += dialogue('Celebrant', 'Rest eternal grant unto him/her, O Lord.');
        h += dialogue('People', 'And let light perpetual shine upon him/her.', true);
        h += dialogue('Celebrant', 'May his/her soul, and the souls of all the departed, through the mercy of God, rest in peace.');
        h += dialogue('People', 'Amen.', true);
        return h;
      }

      if (id === 'ordination_presentation') {
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">The Presentation of the Candidate(s) (BAS p. 644 / p. 653)</div>`;
        h += rubric('The Bishop sits in the episcopal chair. Clerical and lay presenters stand before the Bishop with the candidate(s).');
        h += dialogue('Presenters', 'N., Bishop in the Church of God, on behalf of the clergy and people of the Diocese of ______, we ask you to ordain N. to the office of priest [or deacon].');
        h += dialogue('Bishop', 'Have you seen to it that he/she is a suitable person to be ordained?');
        h += dialogue('Presenters', 'We have inquired about him/her and examined him/her, and we believe that he/she is a person of prayer and sound learning, and of godly life and character.');
        h += dialogue('Bishop', 'Knowing this, do you believe that N. has been called by God to the ministry of a priest [or deacon]?');
        h += dialogue('Presenters', 'We believe that he/she has been so called.');
        h += rubric('The candidate makes and signs the Oaths and Subscriptions. The Bishop then addresses the people:');
        h += dialogue('Bishop', 'Dear friends in Christ, you know the importance of this ministry, and you have heard the judgment of those who have commended N. Is it your will that he/she be ordained?');
        h += dialogue('People', 'It is.', true);
        h += dialogue('Bishop', 'Will you uphold him/her in this ministry?');
        h += dialogue('People', 'We will.', true);
        return h;
      }

      if (id === 'ordination_examination') {
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">The Examination of the Candidate (BAS p. 645 / p. 654)</div>`;
        h += rubric('All sit except the Bishop and the candidate(s), who stand before the Bishop.');
        h += `<div class="my-2 space-y-2 text-black">
          <p><strong>Bishop:</strong> My brother/sister, the Church is the family of God, the body of Christ, and the temple of the Holy Spirit. All baptized people are called to make Christ known as Saviour and Lord, and to share in the renewing of his world. Now you are called to work as a pastor, priest, and teacher [or as a deacon in the Church], together with your bishop and fellow presbyters.</p>
          ${dialogue('Bishop', 'Do you believe that you are truly called by God and his Church to this ministry?')}
          ${dialogue('Candidate', 'I believe I am so called.', true)}
          ${dialogue('Bishop', 'Do you now in the presence of the Church commit yourself to this trust and responsibility?')}
          ${dialogue('Candidate', 'I do.', true)}
          ${dialogue('Bishop', 'Will you be guided by the pastoral direction and leadership of your bishop?')}
          ${dialogue('Candidate', 'I will, by the grace of God.', true)}
          ${dialogue('Bishop', 'Will you be faithful in prayer, and in the reading and study of the holy scriptures, that you may nourish Christ\'s people from the riches of his grace?')}
          ${dialogue('Candidate', 'I will, by the grace of God.', true)}
          ${dialogue('Bishop', 'Will you pattern your life and that of your household in accordance with the teachings of Christ, so that you may be a wholesome example to all people?')}
          ${dialogue('Candidate', 'I will, by the grace of God.', true)}
          ${dialogue('Bishop', 'May the Lord who has given you the will to do these things give you the grace and power to perform them.')}
          ${dialogue('People', 'Amen.', true)}
        </div>`;
        return h;
      }

      if (id === 'ordination_litany') {
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">The Litany for Ordinations &amp; Veni Creator Spiritus (BAS p. 660)</div>`;
        h += rubric('All kneel as able, and the candidate(s) lie prostrate or kneel during the Litany for Ordinations and the hymn Veni Creator Spiritus.');
        h += `<div class="my-2 space-y-1.5">
          ${dialogue('Leader', 'In peace let us pray to the Lord.')}
          ${dialogue('People', 'Lord, have mercy.', true)}
          ${dialogue('Leader', 'For all bishops, priests, and deacons, that they may be filled with your Holy Spirit to preach the word and serve your people, let us pray to the Lord.')}
          ${dialogue('People', 'Lord, have mercy.', true)}
          ${dialogue('Leader', 'For N., chosen to be a priest [or deacon] in the Church, that he/she may faithfully fulfill the duties of this ministry, let us pray to the Lord.')}
          ${dialogue('People', 'Lord, have mercy.', true)}
        </div>`;
        h += `<div class="bg-white py-2 my-2 text-black">
          <div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">Veni Creator Spiritus (Come, Holy Ghost)</div>
          <p><strong>Come, Holy Ghost, our souls inspire, and lighten with celestial fire. Thou the anointing Spirit art, who dost thy sevenfold gifts impart.</strong></p>
        </div>`;
        return h;
      }

      if (id === 'ordination_consecration') {
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">The Consecration of the Ordinand (BAS p. 647 / p. 656)</div>`;
        h += rubric('The candidate kneels before the Bishop. In silence, the Bishop (and presbyters at the ordination of a priest) lays hands upon the head of the ordinand.');
        h += `<div class="my-2 space-y-2 text-black">
          <p>God and Father of all, we praise you for your infinite love in calling us to be a holy people in the kingdom of your Son Jesus our Lord, who is the image of your eternal and invisible glory, the firstborn among many brethren, and the head of the Church.</p>
          <p class="font-bold text-black">Therefore, Father, through Jesus Christ your Son, give your Holy Spirit to N.; fill him/her with grace and power, and make him/her a priest [or deacon] in your Church.</p>
          <p>May he/she exalt you, O Lord, in the midst of your people; offer spiritual sacrifices acceptable to you; boldly proclaim the gospel of salvation; and preside at the sacraments of the new covenant with reverent and joyful heart. Through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever.</p>
        </div>`;
        h += dialogue('People', 'Amen. (Acclaimed by all)', true);
        return h;
      }

      if (id === 'ordination_vesting') {
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">The Vesting &amp; Giving of the Bible and Symbols of Ministry (BAS p. 650)</div>`;
        h += rubric('The newly ordained is vested according to their order. The Bishop presents the Bible (and chalice/paten for a priest), saying:');
        h += dialogue('Bishop', 'Receive this Bible as a sign of the authority given you to preach the Word of God and to administer his holy sacraments. Do not forget the trust committed to you as a priest [or deacon] of the Church of God.');
        h += dialogue('People', 'Amen.', true);
        return h;
      }

      if (id === 'ministry_presentation') {
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">Presentation &amp; Covenant of New Ministry (BAS p. 668)</div>`;
        h += rubric('The churchwardens and presenters stand with the new incumbent or pastoral minister before the Bishop or Regional Dean.');
        h += dialogue('Wardens', 'We present N. to be inducted [or commissioned] to the ministry of Word, Sacrament, and Pastoral Care in this parish.');
        h += dialogue('Officiant', 'N., do you commit yourself to this new trust and responsibility, in partnership with the people of this congregation?');
        h += dialogue('Minister', 'I do, with God\'s help.', true);
        h += dialogue('Officiant', 'People of God, will you support and uphold N. in this shared ministry of Christ?');
        h += dialogue('People', 'We will, with God\'s help.', true);
        return h;
      }

      if (id === 'ministry_presentations_symbols') {
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">Presentation of the Symbols of Ministry (BAS p. 670)</div>`;
        h += rubric('Representatives of the congregation present symbols of ministry:');
        h += `<div class="my-2 space-y-1.5 text-black">
          <p><strong>The Bible:</strong> "N., accept this Bible, and be among us as one who proclaims the Word of God." — <strong>Amen.</strong></p>
          <p><strong>Water:</strong> "N., take this water, and help us to be a household of faith reborn in baptism." — <strong>Amen.</strong></p>
          <p><strong>Book of Alternative Services &amp; Canons:</strong> "N., receive this book of prayer and order, and lead us in the worship and fellowship of the Church." — <strong>Amen.</strong></p>
          <p><strong>Oil of Healing:</strong> "N., use this oil of healing, and be among us as a reconciler and healer." — <strong>Amen.</strong></p>
          <p><strong>Keys of the Church:</strong> "N., receive the keys of this church, and let the doors of this place be open to all people." — <strong>Amen.</strong></p>
          <p><strong>Bread and Wine:</strong> "N., take this bread and wine, and preside among us at the breaking of the bread." — <strong>Amen.</strong></p>
        </div>`;
        return h;
      }

      if (id === 'reconciliation_confession') {
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">Ministry of Healing, Anointing &amp; Reconciliation (BAS pp. 555, 614)</div>`;
        h += rubric('For the Reconciliation of a Penitent (BAS p. 614):');
        h += dialogue('Penitent', 'Bless me, for I have sinned. I confess to Almighty God, to his Church, and to you, that I have sinned by my own fault in thought, word, and deed... For these and all other sins which I cannot now remember, I am truly sorry, I pray God to have mercy on me, and I ask for your counsel, direction, and absolution.');
        h += dialogue('Priest', 'Our Lord Jesus Christ, who has left power to his Church to absolve all sinners who truly repent and believe in him, of his great mercy forgive you all your offences; and by his authority committed to me, I absolve you from all your sins: in the name of the Father, and of the Son, and of the Holy Spirit.');
        h += dialogue('Penitent', 'Amen.', true);
        h += `<div class="mt-3 pt-2 border-t border-stone-200/60">`;
        h += rubric('For the Laying on of Hands and Anointing of the Sick (BAS p. 555):');
        h += dialogue('Minister', 'N., I lay my hands upon you and anoint you with oil in the name of the Father, and of the Son, and of the Holy Spirit, beseeching our Lord Jesus Christ to sustain you with his presence, to drive away all sickness of body and spirit, and to give you that victory of life and peace which will enable you to serve him both now and evermore.');
        h += dialogue('People', 'Amen.', true);
        h += `</div>`;
        return h;
      }

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
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">Collect for Purity (BAS p. 185)</div>`;
        h += rubric('The celebrant says');
        h += dialogue('Celebrant', 'Almighty God, to you all hearts are open, all desires known, and from you no secrets are hidden. Cleanse the thoughts of our hearts by the inspiration of your Holy Spirit, that we may perfectly love you, and worthily magnify your holy name; through Christ our Lord.');
        h += dialogue('People', 'Amen.', true);
        return h;
      }

      if (id === 'canticle_praise') {
        if (appState.canticle === 'kyrie') {
          h += `<div class="bg-white py-2">`;
          h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">Kyrie Eleison (BAS p. 186)</div>`;
          h += dialogue('Leader', 'Lord, have mercy.');
          h += dialogue('People', 'Christ, have mercy.', true);
          h += dialogue('Leader', 'Lord, have mercy.');
          h += `</div>`;
        } else if (appState.canticle === 'trisagion') {
          h += `<div class="bg-white py-2">`;
          h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">Trisagion (BAS p. 187)</div>`;
          h += dialogue('Celebrant', 'Holy God, holy and mighty, holy and immortal,');
          h += dialogue('People', 'Have mercy on us. (Repeated three times)', true);
          h += `</div>`;
        } else if (appState.canticle === 'venite') {
          h += `<div class="bg-white py-2">`;
          h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-2">Venite • Psalm 95:1-7 (BAS p. 49)</div>`;
          h += `<div class="space-y-1.5 text-black">
            <p><strong>Come, let us sing to the Lord; let us shout for joy to the rock of our salvation.</strong></p>
            <p><strong>Let us come before his presence with thanksgiving and raise a loud shout to him with psalms.</strong></p>
            <p><strong>For the Lord is a great God, and a great king above all gods.</strong></p>
            <p><strong>Come, let us bow down, and bend the knee, and kneel before the Lord our Maker.</strong></p>
            <p><strong>For he is our God, and we are the people of his pasture and the sheep of his hand. Oh, that today you would hearken to his voice!</strong></p>
          </div></div>`;
        } else if (appState.canticle === 'jubilate') {
          h += `<div class="bg-white py-2">`;
          h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-2">Jubilate • Psalm 100 (BAS p. 50)</div>`;
          h += `<div class="space-y-1.5 text-black">
            <p><strong>Be joyful in the Lord, all you lands; serve the Lord with gladness and come before his presence with a song.</strong></p>
            <p><strong>Know this: The Lord himself is God; he himself has made us, and we are his; we are his people and the sheep of his pasture.</strong></p>
            <p><strong>Enter his gates with thanksgiving; go into his courts with praise; give thanks to him and call upon his name.</strong></p>
            <p><strong>For the Lord is good; his mercy is everlasting; and his faithfulness endures from age to age.</strong></p>
          </div></div>`;
        } else if (appState.canticle === 'phos_hilaron') {
          h += `<div class="bg-white py-2">`;
          h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-2">O Gracious Light • Phos Hilaron (BAS p. 62)</div>`;
          h += `<div class="space-y-1.5 text-black">
            <p><strong>O gracious Light, pure brightness of the everliving Father in heaven,</strong></p>
            <p><strong>O Jesus Christ, holy and blessed!</strong></p>
            <p><strong>Now as we come to the setting of the sun, and our eyes behold the vesper light, we sing your praises, O God: Father, Son, and Holy Spirit.</strong></p>
            <p><strong>You are worthy at all times to be praised by happy voices, O Son of God, O Giver of life, and to be glorified through all the worlds.</strong></p>
          </div></div>`;
        } else {
          h += `<div class="bg-white py-2">`;
          h += rubric('When appointed, the following hymn of praise is sung or said.');
          h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-2">Glory to God • Gloria in Excelsis (BAS p. 186)</div>`;
          h += `<div class="space-y-2 text-black">
            <p><strong>Glory to God in the highest, and peace to his people on earth.</strong></p>
            <p><strong>Lord God, heavenly King, almighty God and Father, we worship you, we give you thanks, we praise you for your glory.</strong></p>
            <p><strong>Lord Jesus Christ, only Son of the Father, Lord God, Lamb of God, you take away the sin of the world: have mercy on us; you are seated at the right hand of the Father: receive our prayer.</strong></p>
            <p><strong>For you alone are the Holy One, you alone are the Lord, you alone are the Most High, Jesus Christ, with the Holy Spirit, in the glory of God the Father. Amen.</strong></p>
          </div></div>`;
        }
        return h;
      }

      if (id === 'collect_day') {
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">The Collect of the Day</div>`;
        h += dialogue('Celebrant', 'Let us pray.');
        h += rubric('The community prays silently for a short period.');
        h += `<p class="my-2 text-black">${day.collect}</p>`;
        h += dialogue('People', 'Amen.', true);
        return h;
      }

      if (id === 'reading1') {
        const r1 = day.readings.reading1.tracks[day.readings.reading1.selectedTrack];
        h += `<div class="flex items-baseline justify-between mb-1">
          <span class="bas-header text-xs uppercase font-sans font-bold text-black tracking-wider">The First Reading</span>
          <span class="bas-header text-xs font-sans font-bold text-black">${r1.citation}</span>
        </div>`;
        h += rubric('The people sit for the readings.');
        h += dialogue('Reader', `A reading from ${getBookDisplayName(r1.citation)}.`);
        h += renderScriptureLinkBox(r1.citation, r1.text);
        h += dialogue('Reader', 'The Word of the Lord.');
        h += dialogue('People', 'Thanks be to God.', true);
        return h;
      }

      if (id === 'psalm') {
        const psm = day.readings.psalm;
        h += `<div class="flex items-baseline justify-between flex-wrap gap-2 mb-1">
          <span class="bas-header text-xs uppercase font-sans font-bold text-black tracking-wider">The Psalm • ${psm.citation}</span>
          <a href="${getBibleGatewayUrl(psm.citation)}" target="_blank" rel="noopener noreferrer" class="text-xs font-sans font-bold text-rubric hover:underline no-print">View on Bible Gateway (NRSV) ↗</a>
        </div>`;
        h += rubric('The psalm is sung or said responsively.');
        h += `<div class="my-2.5 space-y-1.5 pl-2">`;
        psm.verses.forEach(v => {
          h += `<div class="text-black">
            <span class="text-black">${v.leader}</span><br>
            <span class="response-people pl-4">${v.people}</span>
          </div>`;
        });
        h += `</div>`;
        if (appState.includePsalmPrayer && day.psalmPrayer) {
          h += `<div class="mt-3 pt-2 border-t border-stone-200/50">`;
          h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-0.5">Psalm Prayer (BAS Psalter)</div>`;
          h += `${rubric("Silence may be kept. The celebrant says the Psalm Prayer:")}<p class="text-black">${day.psalmPrayer}</p>`;
          h += `</div>`;
        }
        return h;
      }

      if (id === 'reading2') {
        const r2 = day.readings.reading2;
        h += `<div class="flex items-baseline justify-between mb-1">
          <span class="bas-header text-xs uppercase font-sans font-bold text-black tracking-wider">The Second Reading</span>
          <span class="bas-header text-xs font-sans font-bold text-black">${r2.citation}</span>
        </div>`;
        h += dialogue('Reader', `A reading from ${getBookDisplayName(r2.citation)}.`);
        h += renderScriptureLinkBox(r2.citation, r2.text);
        h += dialogue('Reader', 'The Word of the Lord.');
        h += dialogue('People', 'Thanks be to God.', true);
        return h;
      }

      if (id === 'gradual_gospel') {
        const gsp = day.readings.gospel;
        h += rubric('The people stand as able for the Gospel proclamation.');
        if (appState.gospelAcclamation === 'lenten') {
          h += `<div class="text-center my-2.5 py-1.5 px-3 bg-white py-1.5 text-black font-serif font-bold">
            Praise to you, Lord Jesus Christ, King of endless glory!
          </div>`;
        } else if (appState.gospelAcclamation === 'benedictus') {
          h += `<div class="bg-white py-2 my-2.5 text-sm">
            <div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">The Song of Zechariah • Benedictus (Luke 1:68-79, BAS p. 88)</div>
            <p><strong>Blessed be the Lord, the God of Israel; he has come to his people and set them free. He has raised up for us a mighty Saviour, born of the house of his servant David... In the tender compassion of our God, the dawn from on high shall break upon us, to shine on those who dwell in darkness and the shadow of death, and to guide our feet into the way of peace.</strong></p>
          </div>`;
        } else if (appState.gospelAcclamation === 'magnificat') {
          h += `<div class="bg-white py-2 my-2.5 text-sm">
            <div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">The Song of Mary • Magnificat (Luke 1:46-55, BAS p. 86)</div>
            <p><strong>My soul proclaims the greatness of the Lord, my spirit rejoices in God my Saviour; for he has looked with favour on his lowly servant. From this day all generations will call me blessed: the Almighty has done great things for me, and holy is his name.</strong></p>
          </div>`;
        } else {
          h += `<div class="text-center my-2.5 py-1.5 px-3 bg-white py-1.5 text-black font-serif font-bold">
            Alleluia! Speak, Lord, for your servant is listening; you have the words of eternal life. Alleluia!
          </div>`;
        }

        h += `<div class="flex items-baseline justify-between mb-1">
          <span class="bas-header text-xs uppercase font-sans font-bold text-black tracking-wider">The Holy Gospel</span>
          <span class="bas-header text-xs font-sans font-bold text-black">${gsp.citation}</span>
        </div>`;
        h += dialogue('Gospeller', 'The Lord be with you.');
        h += dialogue('People', 'And also with you.', true);
        h += dialogue('Gospeller', `The Holy Gospel of our Lord Jesus Christ according to ${getBookDisplayName(gsp.citation)}.`);
        h += dialogue('People', 'Glory to you, Lord Jesus Christ.', true);
        h += renderScriptureLinkBox(gsp.citation, gsp.text);
        h += dialogue('Gospeller', 'The Gospel of Christ.');
        h += dialogue('People', 'Praise to you, Lord Jesus Christ.', true);
        return h;
      }

      if (id === 'sermon') {
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">The Sermon / Homily</div>`;
        h += rubric('The people sit. A sermon or homily is preached, followed by a period of silent reflection.');
        return h;
      }

      if (id === 'creed') {
        if (appState.creed === 'none') return '';
        h += rubric('The people stand as able to affirm the faith of the Church.');
        if (appState.creed === 'apostles') {
          h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-2">The Apostles' Creed (BAS p. 189)</div>`;
          h += dialogue('Celebrant', 'Let us confess the faith of our baptism, as we say,');
          h += `<div class="space-y-2 text-black mt-2">
            <p><strong>I believe in God, the Father almighty, creator of heaven and earth.</strong></p>
            <p><strong>I believe in Jesus Christ, his only Son, our Lord. He was conceived by the power of the Holy Spirit and born of the Virgin Mary. He suffered under Pontius Pilate, was crucified, died, and was buried. He descended to the dead. On the third day he rose again. He ascended into heaven, and is seated at the right hand of the Father. He will come again to judge the living and the dead.</strong></p>
            <p><strong>I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and the life everlasting. Amen.</strong></p>
          </div>`;
        } else if (appState.creed === 'shema') {
          h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-2">Hear, O Israel • The Shema (BAS p. 53)</div>`;
          h += `<div class="bg-white py-2 text-black">
            <p><strong>Hear, O Israel, the Lord our God, the Lord is one. Love the Lord your God with all your heart, with all your soul, with all your mind, and with all your strength.</strong></p>
            <p class="mt-2"><strong>This is the first and great commandment. The second is like it: Love your neighbour as yourself. There is no commandment greater than these.</strong></p>
          </div>`;
        } else {
          h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-2">The Nicene Creed (BAS p. 188)</div>`;
          h += dialogue('Celebrant', 'Let us confess our faith, as we say,');
          h += `<div class="space-y-2 text-black mt-2">
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
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-2">The Prayers of the People</div>`;
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
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">Confession and Absolution (BAS p. 191)</div>`;
        h += rubric('The officiating minister invites the people to confession.');
        h += dialogue('Celebrant', 'Dear friends in Christ, God is steadfast in love and infinite in mercy; he welcomes sinners and invites them to his table. Let us confess our sins, confident in God\'s forgiveness.');
        h += rubric('Silence is kept.');
        h += `<div class="my-2 text-black bg-white py-2">
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
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">The Peace (BAS p. 192)</div>`;
        h += rubric('All stand. The presiding celebrant addresses the people.');
        h += dialogue('Celebrant', 'The peace of the Lord be always with you.');
        h += dialogue('People', 'And also with you.', true);
        h += rubric('The members of the community greet one another in the name of the Lord.');
        return h;
      }

      if (id === 'offertory_gifts') {
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">The Preparation of the Gifts &amp; Prayer over the Gifts</div>`;
        h += rubric('The bread and wine, and the offerings of the people, are presented at the holy table.');
        h += dialogue('Celebrant', 'Let us pray.');
        h += `<p class="my-2 text-black">${day.prayerOverGifts || 'Gracious God, accept the offerings we bring this day, and sustain us by the gift of your presence; through Jesus Christ our Lord. Amen.'}</p>`;
        h += dialogue('People', 'Amen.', true);
        return h;
      }

      if (id === 'eucharistic_prayer') {
        const prefaceText = getProperPrefaceText(day);
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">The Great Thanksgiving (${appState.eucharisticPrayer.replace('prayer', 'Eucharistic Prayer ')})</div>`;
        h += rubric('The people remain standing.');
        h += `<div class="space-y-1 mb-4">
          ${dialogue('Celebrant', 'The Lord be with you.')}
          ${dialogue('People', 'And also with you.', true)}
          ${dialogue('Celebrant', 'Lift up your hearts.')}
          ${dialogue('People', 'We lift them to the Lord.', true)}
          ${dialogue('Celebrant', 'Let us give thanks to the Lord our God.')}
          ${dialogue('People', 'It is right to give our thanks and praise.', true)}
        </div>`;

        h += `<div class="text-black leading-relaxed space-y-3">`;
        if (appState.eucharisticPrayer === 'prayer2') {
          h += `<p>We give thanks to you, O God, for the goodness and love which you have made known to us in creation; in the calling of Israel to be your people; in your Word spoken through the prophets; and above all in the Word made flesh, Jesus your Son.</p>`;
        } else if (appState.eucharisticPrayer === 'prayer4') {
          h += `<p>It is right to give you thanks and praise, O Lord, our God, sustainer of the universe, you are worthy of glory and praise. At your command all things came to be: the vast expanse of interstellar space, galaxies, suns, the planets in their courses, and this fragile earth, our island home; by your will they were created and have their being.</p>`;
        } else if (appState.eucharisticPrayer === 'prayer5') {
          h += `<p>We give you thanks and praise, almighty God, through your beloved Son, Jesus Christ, our Saviour and Redeemer. He is your living Word, through whom you have created all things. By the power of the Holy Spirit he took flesh of the Virgin Mary and shared our human nature. He lived and died as one of us, to reconcile us to you, the God and Father of all.</p>`;
        } else if (appState.eucharisticPrayer === 'prayer6') {
          h += `<p>It is right to glorify you, Father, and to give you thanks; for you alone are God, living and true, dwelling in light inaccessible from before time and for ever. Fountain of life and source of all goodness, you made all things and fill them with your blessing.</p>`;
        } else {
          h += `<p>Blessed are you, gracious God, creator of heaven and earth; we give you thanks and praise through Jesus Christ our Lord. <span class="text-black">${prefaceText}</span></p>`;
          h += `<p>Therefore we praise you, joining our voices with angels and archangels and with all the company of heaven, who for ever sing this hymn to proclaim the glory of your name:</p>`;
        }

        h += `<div class="bg-white py-2 my-3">
          <div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">Sanctus and Benedictus</div>
          <p><strong>Holy, holy, holy Lord, God of power and might, heaven and earth are full of your glory. Hosanna in the highest. Blessed is he who comes in the name of the Lord. Hosanna in the highest.</strong></p>
        </div>`;

        h += `<p>On the night he was handed over to suffering and death, our Lord Jesus Christ took bread; and when he had given thanks to you, he broke it, and gave it to his disciples, and said, "Take, eat: this is my body which is given for you. Do this for the remembrance of me."</p>`;
        h += `<p>After supper he took the cup of wine; and when he had given thanks, he gave it to them, and said, "Drink this, all of you: this is my blood of the new covenant, which is shed for you and for many for the forgiveness of sins. Whenever you drink it, do this for the remembrance of me."</p>`;
        h += `<p class="bas-header font-sans text-xs uppercase font-bold text-black tracking-wider my-1.5">Memorial Acclamation</p>`;
        h += `<p><strong>Christ has died. Christ is risen. Christ will come again.</strong></p>`;
        h += `<p>Recalling his death, resurrection, and ascension, we offer you these gifts. Sanctify them by your Holy Spirit to be for your people the Body and Blood of your Son, the holy food and drink of new and unending life in him. Sanctify us also that we may faithfully receive this holy sacrament, and serve you in unity, constancy, and peace.</p>`;
        h += `<p>Through Christ, with Christ, and in Christ, in the unity of the Holy Spirit, all glory and honour are yours, almighty Father, now and for ever.</p>`;
        h += dialogue('People', 'Amen.', true);
        h += `</div>`;
        return h;
      }

      if (id === 'lords_prayer') {
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">The Lord's Prayer (BAS p. 211)</div>`;
        if (appState.lordsPrayer === 'traditional') {
          h += dialogue('Celebrant', 'And now, as our Saviour Christ hath taught us, we are bold to say,');
          h += `<div class="my-2 space-y-1 text-black">
            <p><strong>Our Father, who art in heaven, hallowed be thy name, thy kingdom come, thy will be done, on earth as it is in heaven.</strong></p>
            <p><strong>Give us this day our daily bread.</strong></p>
            <p><strong>And forgive us our trespasses, as we forgive them that trespass against us.</strong></p>
            <p><strong>And lead us not into temptation, but deliver us from evil.</strong></p>
            <p><strong>For thine is the kingdom, the power, and the glory, for ever and ever. Amen.</strong></p>
          </div>`;
        } else {
          h += dialogue('Celebrant', 'As our Saviour taught us, let us pray,');
          h += `<div class="my-2 space-y-1 text-black">
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
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">The Breaking of the Bread (BAS pp. 212-213)</div>`;
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
          <div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">The Communion</div>
          ${dialogue('Celebrant', 'The gifts of God for the People of God.')}
          ${dialogue('People', 'Thanks be to God.', true)}
          ${rubric('The celebrant and people receive communion.')}
        </div>`;
        return h;
      }

      if (id === 'post_communion') {
        h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">Prayer after Communion</div>`;
        h += rubric('The people stand as the celebrant leads the post-communion prayer.');
        h += dialogue('Celebrant', 'Let us pray.');
        h += `<p class="my-2 text-black">${day.prayerAfterCommunion || 'Almighty God, may we who have been nourished at this table grow in love and holiness, and serve you faithfully in the world; through Jesus Christ our Lord. Amen.'}</p>`;
        h += dialogue('People', 'Amen.', true);
        return h;
      }

      if (id === 'doxology') {
        h += `<div class="bg-white py-2">
          <div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">The Doxology (BAS p. 214)</div>
          ${dialogue('All', 'Glory to God, whose power, working in us, can do infinitely more than we can ask or imagine. Glory to God from generation to generation, in the Church and in Christ Jesus, for ever and ever. Amen.', true)}
        </div>`;
        return h;
      }

      if (id === 'blessing_dismissal') {
        if (appState.riteKey === 'word_lay' || appState.riteKey === 'morning_prayer' || appState.riteKey === 'evening_prayer') {
          h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">The Grace &amp; Dismissal (BAS p. 55)</div>`;
          h += dialogue('All', 'The grace of our Lord Jesus Christ, and the love of God, and the fellowship of the Holy Spirit, be with us all evermore. Amen.', true);
        } else {
          h += `<div class="bas-header text-xs uppercase font-sans font-bold tracking-wider text-black mb-1">The Blessing &amp; Dismissal</div>`;
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
        <div class="text-center pb-6 border-b-2 border-black mb-6">
          <div class="text-xs uppercase tracking-widest font-sans font-bold text-black mb-1">${parish}</div>
          <h1 class="text-2xl sm:text-3xl font-cinzel font-bold text-black tracking-wide">${riteTitle}</h1>
          <div class="text-sm font-sans font-bold text-black mt-1">${day.name}</div>
          ${dateNote ? `<div class="text-xs font-sans font-semibold text-black mt-0.5">${dateNote}</div>` : ''}
          <div class="liturgical-rubric text-xs mt-1">The Book of Alternative Services (1985) • Anglican Church of Canada</div>
        </div>
      `;

      let currentSection = '';
      const activeBlocks = appState.blocks.map((b, idx) => ({ block: b, index: idx })).filter(x => x.block.enabled);

      activeBlocks.forEach(({ block, index }) => {
        const blockHtml = renderSingleBlockContent(block, day);
        if (!blockHtml) return;

        if (block.section && block.section !== currentSection && block.section !== 'Custom Insertion') {
          currentSection = block.section;
          const secNote = (INSTRUCTIVE_GUIDE.sectionCommentaries && INSTRUCTIVE_GUIDE.sectionCommentaries[currentSection])
            ? `<div class="section-liturgical-commentary no-print mt-1.5 px-3 py-1.5 rounded bg-white border border-neutral-300 border-l-4 border-l-rubric text-xs font-sans text-black leading-relaxed"><strong class="font-bold text-black">Liturgical Commentary:</strong> ${INSTRUCTIVE_GUIDE.sectionCommentaries[currentSection]}</div>`
            : '';
          html += `
            <div class="mt-7 mb-3">
              <h2 class="text-lg font-cinzel font-bold text-black uppercase tracking-wider border-b-2 border-black pb-1">
                ${currentSection}
              </h2>
              ${secNote}
            </div>
          `;
        }

        const inlineToolbar = appState.showInlineControls ? `
          <div class="block-hover-controls no-print opacity-0 transition-opacity flex items-center space-x-1 bg-stone-100 border border-stone-300 rounded px-1.5 py-0.5 text-xs font-sans">
            <button type="button" onclick="window.moveBlockGlobal(${index}, -1)" class="px-1 hover:text-rubric" title="Move Up">↑</button>
            <button type="button" onclick="window.moveBlockGlobal(${index}, 1)" class="px-1 hover:text-rubric" title="Move Down">↓</button>
            <button type="button" onclick="window.editBlockGlobal('${block.id}')" class="px-1 hover:text-rubric" title="Edit Text/Rubric">✎ Edit</button>
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
