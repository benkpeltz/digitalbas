/**
 * digitalbas - Liturgical & Lectionary Database (BAS 1985)
 */

const LECTIONARY_DATA = {
      proper28: {
        name: "21st Sunday after Pentecost (Proper 28, Year B)",
        season: "Ordinary Time (Green)",
        prefaceKey: "lords_day",
        colorBadge: "bg-emerald-100 text-emerald-800 border-emerald-300",
        collect: "Almighty and everliving God, increase in us your gift of faith, that forsaking what lies behind and reaching out to what is before, we may run the way of your commandments and win the crown of the everlasting joy; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
        prayerOverGifts: "Eternal God, your word inspires our faith. May we who offer you our praise trust you in all things. We ask this in the name of Jesus Christ the Lord. Amen.",
        prayerAfterCommunion: "God of peace, you have nourished us in this sacrament with the body and blood of Christ. May we who have taken holy things keep faith in our hearts and lives, in the name of Jesus Christ the Lord. Amen.",
        psalmPrayer: "Creator of the universe, source of all life, you have filled the earth with beauty and wonder. Open our eyes to see your hand at work in all creation, and give us grace to care for the earth as faithful stewards; through Jesus Christ our Lord. Amen.",
        readings: {
          reading1: {
            tracks: [
              {
                label: "Track 1: Job 38:1-7, (34-41)",
                citation: "Job 38:1-7, 34-41",
                text: ""
              },
              {
                label: "Track 2: Isaiah 53:4-12 (Suffering Servant)",
                citation: "Isaiah 53:4-12",
                text: ""
              }
            ],
            selectedTrack: 0
          },
          psalm: {
            citation: "Psalm 104:1-9, 24, 35c",
            verses: [
              { leader: "Bless the Lord, O my soul! *", people: "O Lord my God, you are great indeed, clothed in majesty and splendour," },
              { leader: "wrapped in light as with a cloak, *", people: "stretching out the heavens like a tent." },
              { leader: "You set the beams of your chambers upon the waters; *", people: "you make the clouds your chariot; you ride on the wings of the wind;" },
              { leader: "you make the winds your messengers *", people: "and flames of fire your servants." },
              { leader: "O Lord, how manifold are your works! *", people: "in wisdom you have made them all; the earth is full of your creatures." },
              { leader: "Bless the Lord, O my soul. *", people: "Hallelujah!" }
            ]
          },
          reading2: {
            citation: "Hebrews 5:1-10",
            text: ""
          },
          gospel: {
            citation: "Mark 10:35-45",
            text: ""
          }
        }
      },
      allsaints: {
        name: "All Saints' Day (November 1)",
        season: "Feast of All Saints (White/Gold)",
        prefaceKey: "allsaints",
        colorBadge: "bg-amber-100 text-black border-amber-300",
        collect: "Almighty God, whose people are knit together in one holy Church, the mystical Body of your Son, grant us grace to follow your blessed saints in lives of faith and commitment, and to know the inexpressible joys you have prepared for those who love you; through your Son, Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
        prayerOverGifts: "Holy and mighty God, we give you thanks for the triumph of Christ in the lives of all his saints. Receive all we offer you this day, and help us, like them, to run our course with faith, that we may come to your eternal kingdom. We ask this in the name of Jesus Christ our Lord. Amen.",
        prayerAfterCommunion: "Lord of hosts, we praise your glory reflected in your saints. May we who share at this table be filled with the joy of your eternal kingdom, where Jesus is Lord, now and for ever. Amen.",
        psalmPrayer: "Creator of all, the earth is yours and all who dwell in it. Give us clean hands and pure hearts, that we may stand in your holy place and receive your blessing; through Jesus Christ our Lord. Amen.",
        readings: {
          reading1: {
            tracks: [
              {
                label: "Wisdom of Solomon 3:1-9",
                citation: "Wisdom of Solomon 3:1-9",
                text: ""
              },
              {
                label: "Alternate: Isaiah 25:6-9",
                citation: "Isaiah 25:6-9",
                text: ""
              }
            ],
            selectedTrack: 0
          },
          psalm: {
            citation: "Psalm 24",
            verses: [
              { leader: "The earth is the Lord's and all that is in it, *", people: "the world and all who dwell therein." },
              { leader: "For it is he who founded it upon the seas *", people: "and made it firm upon the rivers of the deep." },
              { leader: "'Who can ascend the hill of the Lord? *", people: "and who can stand in his holy place?'" },
              { leader: "'Those who have clean hands and a pure heart, *", people: "who have not pledged themselves to falsehood, nor sworn by what is a fraud.'" },
              { leader: "They shall receive a blessing from the Lord *", people: "and a just reward from the God of their salvation." }
            ]
          },
          reading2: {
            citation: "Revelation 21:1-6a",
            text: ""
          },
          gospel: {
            citation: "John 11:32-44",
            text: ""
          }
        }
      },
      advent1: {
        name: "First Sunday of Advent (Year C)",
        season: "Advent (Purple/Blue)",
        prefaceKey: "advent",
        colorBadge: "bg-purple-100 text-purple-800 border-purple-300",
        collect: "Almighty God, give us grace to cast away the works of darkness and put on the armour of light, now in the time of this mortal life in which your Son Jesus Christ came to visit us in great humility; that on the last day, when he shall come again in his glorious majesty to judge the living and the dead, we may rise to the life immortal; through him who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
        prayerOverGifts: "God of love and power, your word inspires our faith. Receive all we offer you this day, and grant that your people may be prepared for the coming of your Son Jesus Christ our Lord. Amen.",
        prayerAfterCommunion: "God for whom we wait, you have fed us with the bread of eternal life. Keep us ever watchful, that we may be ready to stand before the Son of man, Jesus Christ our Lord. Amen.",
        psalmPrayer: "God of compassion and truth, to you we lift up our souls. Teach us your paths and lead us in your truth, as we await the fullness of your redemption; through Jesus Christ our Lord. Amen.",
        readings: {
          reading1: {
            tracks: [
              {
                label: "Jeremiah 33:14-16",
                citation: "Jeremiah 33:14-16",
                text: ""
              }
            ],
            selectedTrack: 0
          },
          psalm: {
            citation: "Psalm 25:1-9",
            verses: [
              { leader: "To you, O Lord, I lift up my soul; my God, I put my trust in you; *", people: "let me not be humiliated, nor let my enemies triumph over me." },
              { leader: "Let none who look to you be put to shame; *", people: "let the treacherous be disappointed in their schemes." },
              { leader: "Show me your ways, O Lord, *", people: "and teach me your paths." },
              { leader: "Lead me in your truth and teach me, *", people: "for you are the God of my salvation; in you have I trusted all the day long." }
            ]
          },
          reading2: {
            citation: "1 Thessalonians 3:9-13",
            text: ""
          },
          gospel: {
            citation: "Luke 21:25-36",
            text: ""
          }
        }
      },
      christmas: {
        name: "Christmas Day (Nativity of our Lord)",
        season: "Christmas (White/Gold)",
        prefaceKey: "incarnation",
        colorBadge: "bg-amber-100 text-black border-amber-300",
        collect: "Almighty God, you wonderfully created and yet more wonderfully restored the dignity of human nature. In your mercy, grant that we may share the divine life of him who humbled himself to share our humanity, your Son Jesus Christ, who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.",
        prayerOverGifts: "Source of light and gladness, accept all we offer on this joyful feast. May we grow up in him who unites our lives to yours; for he is Lord now and for ever. Amen.",
        prayerAfterCommunion: "Father of all, the child born for us is the Saviour of the world. May he who made us your children welcome us into your glorious kingdom, where he is alive and reigns, now and for ever. Amen.",
        psalmPrayer: "Creator of the heavens and the earth, let all creation sing a new song of joy, for you have made known your salvation in the birth of your Son, Jesus Christ our Lord. Amen.",
        readings: {
          reading1: {
            tracks: [
              {
                label: "Isaiah 9:2-7",
                citation: "Isaiah 9:2-7",
                text: ""
              }
            ],
            selectedTrack: 0
          },
          psalm: {
            citation: "Psalm 96",
            verses: [
              { leader: "Sing to the Lord a new song; *", people: "sing to the Lord, all the whole earth." },
              { leader: "Sing to the Lord and bless his name; *", people: "proclaim the good news of his salvation from day to day." },
              { leader: "Declare his glory among the nations *", people: "and his wonders among all peoples." },
              { leader: "For great is the Lord and greatly to be praised; *", people: "he is more to be feared than all gods." }
            ]
          },
          reading2: {
            citation: "Titus 2:11-14",
            text: ""
          },
          gospel: {
            citation: "Luke 2:1-14 (15-20)",
            text: ""
          }
        }
      },
      epiphany: {
        name: "The Epiphany of the Lord (January 6)",
        season: "Epiphany (White/Gold)",
        prefaceKey: "epiphany",
        colorBadge: "bg-amber-100 text-black border-amber-300",
        collect: "Eternal God, who by a star led wise men to the worship of your Son. Guide by your light the nations of the earth, that the whole world may see your glory; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
        prayerOverGifts: "Gracious God, accept the offerings of your Church, not gold, frankincense, and myrrh, but that which they proclaim: Jesus Christ, our light and our salvation. Amen.",
        prayerAfterCommunion: "God of all the nations of the earth, guide us by your light through the deserts of this world, until we come to behold your glory face to face; through Jesus Christ our Lord. Amen.",
        psalmPrayer: "God of righteousness, you have given your justice to the King's Son. May his reign bring peace to the nations and deliverance to the needy; through Jesus Christ our Lord. Amen.",
        readings: {
          reading1: {
            tracks: [
              {
                label: "Isaiah 60:1-6",
                citation: "Isaiah 60:1-6",
                text: ""
              }
            ],
            selectedTrack: 0
          },
          psalm: {
            citation: "Psalm 72:1-7, 10-14",
            verses: [
              { leader: "Give the king your justice, O God, *", people: "and your righteousness to the king's son;" },
              { leader: "That he may rule your people righteously *", people: "and the poor with justice." },
              { leader: "The kings of Tarshish and of the isles shall pay tribute, *", people: "and the kings of Arabia and Saba offer gifts." },
              { leader: "All kings shall bow down before him, *", people: "and all the nations do him service." }
            ]
          },
          reading2: {
            citation: "Ephesians 3:1-12",
            text: ""
          },
          gospel: {
            citation: "Matthew 2:1-12",
            text: ""
          }
        }
      },
      ash_wednesday: {
        name: "Ash Wednesday / First Sunday in Lent",
        season: "Lent (Purple)",
        prefaceKey: "lent",
        colorBadge: "bg-purple-100 text-purple-900 border-purple-300",
        collect: "Almighty and everlasting God, you despise nothing you have made and forgive the sins of all who are penitent. Create and make in us new and contrite hearts, that we, worthily lamenting our sins and acknowledging our brokenness, may obtain of you, the God of all mercy, perfect remission and forgiveness; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
        prayerOverGifts: "Merciful God, turn us from sin to faithfulness. Accept our offerings, and prepare us to celebrate the death and resurrection of Christ our Saviour, who is alive and reigns with you now and for ever. Amen.",
        prayerAfterCommunion: "God of compassion, through your Son Jesus Christ you reconcile your people to yourself. Following his example of prayer and fasting, may we obey you with willing hearts and serve one another in holy love; through Jesus Christ our Lord. Amen.",
        psalmPrayer: "Have mercy on us, O God, in your great goodness. Wash us thoroughly from our wickedness and create in us clean hearts, that we may rejoice again in your saving help; through Jesus Christ our Lord. Amen.",
        readings: {
          reading1: {
            tracks: [
              {
                label: "Joel 2:1-2, 12-17",
                citation: "Joel 2:1-2, 12-17",
                text: ""
              },
              {
                label: "Alternate: Isaiah 58:1-12 (True Fasting)",
                citation: "Isaiah 58:1-12",
                text: ""
              }
            ],
            selectedTrack: 0
          },
          psalm: {
            citation: "Psalm 51:1-18",
            verses: [
              { leader: "Have mercy on me, O God, according to your loving-kindness; *", people: "in your great compassion blot out my offences." },
              { leader: "Wash me through and through from my wickedness *", people: "and cleanse me from my sin." },
              { leader: "Create in me a clean heart, O God, *", people: "and renew a right spirit within me." },
              { leader: "Cast me not away from your presence *", people: "and take not your holy Spirit from me." },
              { leader: "Give me the joy of your saving help again *", people: "and sustain me with your bountiful Spirit." }
            ]
          },
          reading2: {
            citation: "2 Corinthians 5:20b–6:10",
            text: ""
          },
          gospel: {
            citation: "Matthew 6:1-6, 16-21",
            text: ""
          }
        }
      },
      good_friday: {
        name: "Good Friday (The Celebration of the Lord's Passion)",
        season: "Holy Week / Passiontide (Red/Black)",
        prefaceKey: "lent",
        colorBadge: "bg-red-100 text-red-900 border-red-300",
        collect: "Almighty God, look graciously, we pray, on this your family, for whom our Lord Jesus Christ was willing to be betrayed and given into the hands of sinners, and to suffer death upon the cross; who now lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
        prayerOverGifts: "Merciful God, by the passion of your Son you have redeemed the world. Receive our lives as a living sacrifice of thanksgiving; through Jesus Christ our Lord. Amen.",
        prayerAfterCommunion: "Almighty and eternal God, you have restored us to life by the triumphant death and resurrection of Christ. Continue this healing work within us, that we may partake in the mystery of your boundless love; through Jesus Christ our Lord. Amen.",
        psalmPrayer: "Lord Jesus Christ, when you cried out on the cross, you bore our forsakenness so that we might never be separated from the love of God. Draw all people to yourself, now and for ever. Amen.",
        readings: {
          reading1: {
            tracks: [
              {
                label: "Isaiah 52:13–53:12 (Fourth Servant Song)",
                citation: "Isaiah 52:13–53:12",
                text: ""
              }
            ],
            selectedTrack: 0
          },
          psalm: {
            citation: "Psalm 22:1-11",
            verses: [
              { leader: "My God, my God, why have you forsaken me? *", people: "and are so far from my cry and from the words of my distress?" },
              { leader: "O my God, I cry in the daytime, but you do not answer; *", people: "by night as well, but I find no rest." },
              { leader: "Yet you are the Holy One, *", people: "enthroned upon the praises of Israel." },
              { leader: "Our forefathers put their trust in you; *", people: "they trusted, and you delivered them." }
            ]
          },
          reading2: {
            citation: "Hebrews 10:16-25",
            text: ""
          },
          gospel: {
            citation: "John 18:1–19:42 (The Passion of our Lord)",
            text: ""
          }
        }
      },
      easter: {
        name: "Easter Day (The Resurrection of our Lord)",
        season: "Eastertide (White/Gold)",
        prefaceKey: "easter",
        colorBadge: "bg-amber-100 text-black border-amber-300",
        collect: "Lord of all life and power, who through the mighty resurrection of your Son overcame the old order of sin and death to make all things new in him: grant that we, being dead to sin and alive to you in Jesus Christ, may reign with him in glory; who with you and the Holy Spirit is alive and reigns, one God, now and for ever. Amen.",
        prayerOverGifts: "God our strength and salvation, receive all we offer you this day, and grant that we who celebrate the resurrection of your Son may share his eternal glory; for he is Lord now and for ever. Amen.",
        prayerAfterCommunion: "God of life, bring us to the glory of the resurrection promised in this Easter sacrament. We ask this in the name of Jesus Christ the risen Lord. Amen.",
        psalmPrayer: "Risen Christ, cornerstone of our salvation, on this day the Lord has acted and we rejoice in your victory over death. Fill our hearts with your Easter peace, now and for ever. Amen.",
        readings: {
          reading1: {
            tracks: [
              {
                label: "Acts 10:34-43",
                citation: "Acts 10:34-43",
                text: ""
              }
            ],
            selectedTrack: 0
          },
          psalm: {
            citation: "Psalm 118:1-2, 14-24",
            verses: [
              { leader: "Give thanks to the Lord, for he is good; *", people: "his mercy endures for ever." },
              { leader: "Let Israel now proclaim, *", people: "'His mercy endures for ever.'" },
              { leader: "The Lord is my strength and my song, *", people: "and he has become my salvation." },
              { leader: "The same stone which the builders rejected *", people: "has become the chief cornerstone." },
              { leader: "This is the Lord's doing, *", people: "and it is marvellous in our eyes." },
              { leader: "On this day the Lord has acted; *", people: "we will rejoice and be glad in it." }
            ]
          },
          reading2: {
            citation: "1 Corinthians 15:19-26",
            text: ""
          },
          gospel: {
            citation: "John 20:1-18",
            text: ""
          }
        }
      },
      pentecost: {
        name: "The Day of Pentecost (Year B)",
        season: "Pentecost (Red)",
        prefaceKey: "pentecost",
        colorBadge: "bg-red-100 text-red-900 border-red-300",
        collect: "Almighty God, on this day you opened the way of eternal life to every race and nation by the promised gift of your Holy Spirit: Shed abroad this gift throughout the world by the preaching of the gospel, that it may reach to the ends of the earth; through Jesus Christ our Lord, who lives and reigns with you, in the unity of the Holy Spirit, one God, for ever and ever. Amen.",
        prayerOverGifts: "Giver of life, receive all we offer you this day. Let the Spirit you bestow on your Church continue to work in the world through the hearts of all who believe. We ask this in the name of Jesus Christ the Lord. Amen.",
        prayerAfterCommunion: "Father, may we who have received this eucharist live in the unity of your Holy Spirit, that we may show forth his gifts to all the world. We ask this in the name of Jesus Christ our Lord. Amen.",
        psalmPrayer: "Creator Spirit, send forth your breath upon your whole creation and renew the face of the earth, that all peoples may praise your glorious name; through Jesus Christ our Lord. Amen.",
        readings: {
          reading1: {
            tracks: [
              {
                label: "Acts 2:1-21",
                citation: "Acts 2:1-21",
                text: ""
              },
              {
                label: "Alternate: Ezekiel 37:1-14 (Valley of Dry Bones)",
                citation: "Ezekiel 37:1-14",
                text: ""
              }
            ],
            selectedTrack: 0
          },
          psalm: {
            citation: "Psalm 104:24-34, 35b",
            verses: [
              { leader: "O Lord, how manifold are your works! *", people: "in wisdom you have made them all; the earth is full of your creatures." },
              { leader: "Yonder is the great and wide sea with its living things too many to number, *", people: "creatures both small and great." },
              { leader: "All of them look to you *", people: "to give them their food in due season." },
              { leader: "You send forth your Spirit, and they are created; *", people: "and so you renew the face of the earth." },
              { leader: "May the glory of the Lord endure for ever; *", people: "may the Lord rejoice in all his works." }
            ]
          },
          reading2: {
            citation: "Romans 8:22-27",
            text: ""
          },
          gospel: {
            citation: "John 15:26-27; 16:4b-15",
            text: ""
          }
        }
      },
      trinity: {
        name: "Trinity Sunday (First Sunday after Pentecost)",
        season: "Trinity Sunday (White/Gold)",
        prefaceKey: "trinity",
        colorBadge: "bg-amber-100 text-black border-amber-300",
        collect: "Father, we praise you: through your Word and Holy Spirit you created all things. You reveal your salvation in all the world by sending to us Jesus Christ, the Word made flesh. Through your Holy Spirit you give us a share in your life and love. Fill us with the vision of your glory, that we may always serve and praise you, Father, Son, and Holy Spirit, one God, for ever and ever. Amen.",
        prayerOverGifts: "Living God, receive all we offer you this day. Grant that hearing your word and responding to your Spirit, we may share in your divine life. We ask this in the name of Jesus Christ the Lord. Amen.",
        prayerAfterCommunion: "Almighty and eternal God, may we who have received this eucharist worship you in all we do, and proclaim the glory of your Majesty. We ask this in the name of Jesus Christ the Lord. Amen.",
        psalmPrayer: "Triune God of majesty and splendour, how glorious is your name in all the earth! Receive our awe and adoration, Father, Son, and Holy Spirit, now and for ever. Amen.",
        readings: {
          reading1: {
            tracks: [
              {
                label: "Isaiah 6:1-8 (Vision in the Temple)",
                citation: "Isaiah 6:1-8",
                text: ""
              }
            ],
            selectedTrack: 0
          },
          psalm: {
            citation: "Psalm 29",
            verses: [
              { leader: "Ascribe to the Lord, you gods, *", people: "ascribe to the Lord glory and strength." },
              { leader: "Ascribe to the Lord the glory due his name; *", people: "worship the Lord in the beauty of holiness." },
              { leader: "The voice of the Lord is upon the waters; *", people: "the God of glory thunders; the Lord is upon the mighty waters." },
              { leader: "The Lord shall give strength to his people; *", people: "the Lord shall give his people the blessing of peace." }
            ]
          },
          reading2: {
            citation: "Romans 8:12-17",
            text: ""
          },
          gospel: {
            citation: "John 3:1-17",
            text: ""
          }
        }
      },
      reign_of_christ: {
        name: "The Reign of Christ (Last Sunday after Pentecost)",
        season: "Reign of Christ (White/Gold)",
        prefaceKey: "lords_day",
        colorBadge: "bg-amber-100 text-black border-amber-300",
        collect: "Almighty and everlasting God, whose will it is to restore all things in your well-beloved Son, our Lord and King, grant that the peoples of the earth, now divided and enslaved by sin, may be freed and brought together under his gentle and loving rule; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
        prayerOverGifts: "Eternal God, by your grace you have raised us up and enthroned us with Christ in the heavenly realms. Receive all we offer you this day, and lead us in those good works for which you have created us. We ask this in the name of Jesus Christ the Lord. Amen.",
        prayerAfterCommunion: "Almighty God, you have made your Son the universal ruler and the centre of all creation. May we who have shared this table rejoice in his peace and serve him in our neighbours; through Jesus Christ our Lord. Amen.",
        psalmPrayer: "Sovereign God, you are robed in majesty and your throne is established from of old. Rule in our hearts by your truth and love; through Jesus Christ our Sovereign and Saviour. Amen.",
        readings: {
          reading1: {
            tracks: [
              {
                label: "Daniel 7:9-10, 13-14",
                citation: "Daniel 7:9-10, 13-14",
                text: ""
              }
            ],
            selectedTrack: 0
          },
          psalm: {
            citation: "Psalm 93",
            verses: [
              { leader: "The Lord is King; he has put on splendid apparel; *", people: "the Lord has put on his apparel and girded himself with strength." },
              { leader: "He has made the whole world so sure *", people: "that it cannot be moved;" },
              { leader: "Ever since the world began, your throne has been established; *", people: "you are from everlasting." },
              { leader: "Holiness adorns your house, O Lord, *", people: "for ever and for evermore." }
            ]
          },
          reading2: {
            citation: "Revelation 1:4b-8",
            text: ""
          },
          gospel: {
            citation: "John 18:33-37",
            text: ""
          }
        }
      },
      healing: {
        name: "Pastoral Liturgy of Healing & Wholeness (BAS p. 551)",
        season: "Pastoral Ministry (Green/White)",
        prefaceKey: "lords_day",
        colorBadge: "bg-teal-100 text-teal-900 border-teal-300",
        collect: "God of peace, you have taught us that in returning and rest we shall be saved, in quietness and confidence shall be our strength. By the power of your Spirit lift us to your presence, where we may be still and know that you are God; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
        prayerOverGifts: "God of compassion and wholeness, receive the gifts we bring to your table. As Jesus healed the sick and restored the broken, make this eucharist a medicine of immortality for all who seek your touch; through Jesus Christ our Lord. Amen.",
        prayerAfterCommunion: "Gracious God, you have strengthened us with the body and blood of your Son. Pour out your healing grace upon all who suffer in body, mind, or spirit, that they may know your peace; through Jesus Christ our Lord. Amen.",
        psalmPrayer: "Compassionate Lord, you heal the broken-hearted and bind up all their wounds. Grant us your comfort and strength in every time of trouble; through Jesus Christ our Lord. Amen.",
        readings: {
          reading1: {
            tracks: [
              {
                label: "Isaiah 40:27-31 (Renewing Strength)",
                citation: "Isaiah 40:27-31",
                text: ""
              }
            ],
            selectedTrack: 0
          },
          psalm: {
            citation: "Psalm 103:1-5",
            verses: [
              { leader: "Bless the Lord, O my soul, *", people: "and all that is within me, bless his holy name." },
              { leader: "Bless the Lord, O my soul, *", people: "and forget not all his benefits." },
              { leader: "He forgives all your sins *", people: "and heals all your infirmities;" },
              { leader: "He redeems your life from the grave *", people: "and crowns you with mercy and loving-kindness." }
            ]
          },
          reading2: {
            citation: "James 5:13-16",
            text: ""
          },
          gospel: {
            citation: "Matthew 11:28-30",
            text: ""
          }
        }
      },
      baptism_occasion: {
        name: "The Celebration of Holy Baptism (BAS p. 150)",
        season: "Sacrament of Initiation (White/Gold)",
        prefaceKey: "baptism",
        colorBadge: "bg-sky-100 text-sky-900 border-sky-300",
        collect: "Heavenly Father, we thank you that by water and the Holy Spirit you have bestowed upon these your servants the forgiveness of sin, and have raised them to the new life of grace. Sustain them, O Lord, in your Holy Spirit, give them an inquiring and discerning heart, the courage to will and to persevere, a spirit to know and to love you, and the gift of joy and wonder in all your works. Amen.",
        prayerOverGifts: "God of grace, by water and the Spirit you claim us as your own. Receive the gifts we bring to your table and strengthen the newly baptized in the life of Christ; who is Lord now and for ever. Amen.",
        prayerAfterCommunion: "Gracious God, in baptism you have made us one body in Christ, and at this table you have fed us with the bread of life. Send us out in the power of your Spirit to live and work to your praise and glory. Amen.",
        psalmPrayer: "God of majesty and power, your voice is upon the mighty waters. Pour out your Spirit upon your sons and daughters, and give your people the blessing of peace; through Jesus Christ our Lord. Amen.",
        readings: {
          reading1: {
            tracks: [
              {
                label: "Option 1: Ezekiel 36:24-28 (Clean Water & A New Heart)",
                citation: "Ezekiel 36:24-28",
                text: ""
              },
              {
                label: "Option 2: Isaiah 44:1-5 (Streams on the Dry Ground)",
                citation: "Isaiah 44:1-5",
                text: ""
              },
              {
                label: "Option 3: Genesis 1:1-5 (The Spirit upon the Waters)",
                citation: "Genesis 1:1-5",
                text: ""
              }
            ],
            selectedTrack: 0
          },
          psalm: {
            citation: "Psalm 29",
            verses: [
              { leader: "Ascribe to the Lord, you gods, *", people: "ascribe to the Lord glory and strength." },
              { leader: "Ascribe to the Lord the glory due his name; *", people: "worship the Lord in the beauty of holiness." },
              { leader: "The voice of the Lord is upon the waters; *", people: "the God of glory thunders; the Lord is upon the mighty waters." },
              { leader: "The voice of the Lord is a powerful voice; *", people: "the voice of the Lord is a voice of splendour." },
              { leader: "The Lord sits enthroned above the flood; *", people: "the Lord sits enthroned as king for evermore." },
              { leader: "The Lord shall give strength to his people; *", people: "the Lord shall give his people the blessing of peace." }
            ]
          },
          reading2: {
            citation: "Romans 6:3-11",
            text: ""
          },
          gospel: {
            citation: "Mark 1:9-11",
            text: ""
          }
        }
      },
      confirmation_occasion: {
        name: "Confirmation, Reception & Reaffirmation of Baptismal Vows (BAS p. 622)",
        season: "Episcopal Confirmation Rite (Red/White)",
        prefaceKey: "pentecost",
        colorBadge: "bg-red-100 text-red-900 border-red-300",
        collect: "Almighty and everliving God, may the servos of your grace who have been sealed by your Holy Spirit in baptism and confirmation grow continually in wisdom, strength, and love, and boldly witness to Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
        prayerOverGifts: "Giver of life, receive all we offer you this day. Let the Spirit you bestow on your Church continue to work in the world through the hearts of all who believe; through Jesus Christ our Lord. Amen.",
        prayerAfterCommunion: "Faithful God, may we who have shared this holy meal live in the power of your Spirit and shine forth your light in all the world; through Jesus Christ our Lord. Amen.",
        psalmPrayer: "Creator Spirit, renew the face of the earth and kindle in the hearts of your people the fire of your love; through Jesus Christ our Lord. Amen.",
        readings: {
          reading1: {
            tracks: [
              {
                label: "Option 1: Isaiah 11:1-3a (The Sevenfold Spirit of Wisdom)",
                citation: "Isaiah 11:1-3a",
                text: ""
              },
              {
                label: "Option 2: Joel 2:28-29 (Outpouring of the Spirit)",
                citation: "Joel 2:28-29",
                text: ""
              }
            ],
            selectedTrack: 0
          },
          psalm: {
            citation: "Psalm 104:25-35b",
            verses: [
              { leader: "O Lord, how manifold are your works! *", people: "in wisdom you have made them all; the earth is full of your creatures." },
              { leader: "All of them look to you *", people: "to give them their food in due season." },
              { leader: "You give it to them; they gather it; *", people: "you open your hand, and they are filled with good things." },
              { leader: "You send forth your Spirit, and they are created; *", people: "and so you renew the face of the earth." }
            ]
          },
          reading2: {
            citation: "Acts 8:14-17",
            text: ""
          },
          gospel: {
            citation: "Luke 4:16-21",
            text: ""
          }
        }
      },
      marriage_occasion: {
        name: "The Celebration and Blessing of a Marriage (BAS p. 528)",
        season: "Holy Matrimony (White/Gold)",
        prefaceKey: "marriage",
        colorBadge: "bg-amber-100 text-black border-amber-300",
        collect: "O God, faithful and true, whose steadfast love endures for ever, we give you thanks for witnessing the vows of N. and N. By your Holy Spirit, pour your abundant blessing upon them, that they may be strengthened in fidelity, enriched with grace, and united in love all the days of their lives; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
        prayerOverGifts: "God of covenant love, receive the gifts we bring to your altar on this joyful day. Bless N. and N. with the wine of gladness and the bread of life; through Jesus Christ our Lord. Amen.",
        prayerAfterCommunion: "Gracious God, you have united N. and N. in the covenant of marriage and fed us at the table of your Son. Keep them steadfast in your love and bring us all to the marriage supper of the Lamb; through Jesus Christ our Lord. Amen.",
        psalmPrayer: "Creator of all joy, bless this home and household with your peace, that all who dwell within it may walk in your ways; through Jesus Christ our Lord. Amen.",
        readings: {
          reading1: {
            tracks: [
              {
                label: "Option 1: Song of Solomon 2:10-13; 8:6-7 (Many Waters Cannot Quench Love)",
                citation: "Song of Solomon 2:10-13; 8:6-7",
                text: ""
              },
              {
                label: "Option 2: Genesis 1:26-28 (Created in God's Image)",
                citation: "Genesis 1:26-28",
                text: ""
              },
              {
                label: "Option 3: Tobit 8:5b-8 (Prayer of Tobias and Sarah)",
                citation: "Tobit 8:5b-8",
                text: ""
              }
            ],
            selectedTrack: 0
          },
          psalm: {
            citation: "Psalm 128",
            verses: [
              { leader: "Happy are they all who fear the Lord, *", people: "and who follow in his ways!" },
              { leader: "You shall eat the fruit of your labour; *", people: "happiness and prosperity shall be yours." },
              { leader: "The Lord bless you out of Zion, *", people: "and may you see the prosperity of Jerusalem all the days of your life." },
              { leader: "May you live to see your children's children; *", people: "may peace be upon Israel." }
            ]
          },
          reading2: {
            citation: "1 Corinthians 13:1-13",
            text: ""
          },
          gospel: {
            citation: "John 2:1-11",
            text: ""
          }
        }
      },
      funeral_occasion: {
        name: "The Funeral Liturgy (BAS p. 571)",
        season: "Christian Burial & Easter Hope (White/Purple)",
        prefaceKey: "commemoration_dead",
        colorBadge: "bg-purple-100 text-purple-900 border-purple-300",
        collect: "O God of grace and glory, we remember before you this day our brother/sister N. We thank you for giving him/her to us, his/her family and friends, to know and to love as a companion on our earthly pilgrimage. In your boundless compassion, console us who mourn. Give us faith to see in death the gate of eternal life, so that in quiet confidence we may continue our course on earth, until, by your call, we are reunited with those who have gone before; through Jesus Christ our Lord. Amen.",
        prayerOverGifts: "God of mercy, accept these our gifts in remembrance of our brother/sister N., and grant that as we share this eucharist we may be strengthened by the hope of the resurrection; through Jesus Christ our Lord. Amen.",
        prayerAfterCommunion: "Almighty God, we thank you that in your great love you have fed us with the spiritual food and drink of the body and blood of your Son Jesus Christ, and have given us a foretaste of your heavenly banquet. Grant that this sacrament may be to us a comfort in affliction, and a pledge of our inheritance in that kingdom where there is no death, neither sorrow nor crying, but the fullness of joy with all your saints; through Jesus Christ our Saviour. Amen.",
        psalmPrayer: "Good Shepherd of your sheep, you lead us through the valley of the shadow of death into the light of your presence. Comfort all who mourn and bring us to dwell in your house for ever; through Jesus Christ our Lord. Amen.",
        readings: {
          reading1: {
            tracks: [
              {
                label: "Option 1: Isaiah 25:6-9 (Swallowing Up Death Forever)",
                citation: "Isaiah 25:6-9",
                text: ""
              },
              {
                label: "Option 2: Wisdom of Solomon 3:1-5, 9 (In the Hand of God)",
                citation: "Wisdom of Solomon 3:1-5, 9",
                text: ""
              },
              {
                label: "Option 3: Job 19:21-27a (I Know That My Redeemer Lives)",
                citation: "Job 19:21-27a",
                text: ""
              }
            ],
            selectedTrack: 0
          },
          psalm: {
            citation: "Psalm 23",
            verses: [
              { leader: "The Lord is my shepherd; *", people: "I shall not want." },
              { leader: "He makes me lie down in green pastures *", people: "and leads me beside still waters." },
              { leader: "He revives my soul *", people: "and guides me along right pathways for his name's sake." },
              { leader: "Though I walk through the valley of the shadow of death, I shall fear no evil; *", people: "for you are with me; your rod and your staff, they comfort me." },
              { leader: "You spread a table before me in the presence of those who trouble me; *", people: "you have anointed my head with oil, and my cup is running over." },
              { leader: "Surely your goodness and mercy shall follow me all the days of my life, *", people: "and I will dwell in the house of the Lord for ever." }
            ]
          },
          reading2: {
            citation: "Romans 8:31-35, 37-39",
            text: ""
          },
          gospel: {
            citation: "John 14:1-6, 27",
            text: ""
          }
        }
      },
      ordination_occasion: {
        name: "The Ordination of a Bishop, Priest, or Deacon (BAS p. 634)",
        season: "Ordination & Holy Orders (Red/White)",
        prefaceKey: "apostles_ordination",
        colorBadge: "bg-red-100 text-red-900 border-red-300",
        collect: "Almighty God, the giver of all good gifts, in your divine providence you have appointed various orders in your Church: Give your grace, we humbly pray, to all who are called to any office and ministry for your people; and so fill them with the truth of your doctrine and clothe them with holiness of life, that they may faithfully serve before you, to the glory of your great name and for the benefit of your holy Church; through Jesus Christ our Lord, who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.",
        prayerOverGifts: "Father, each of us is called to a ministry in your Church. Accept these offerings and make us, with your newly ordained servant(s), faithful stewards of your mysteries; through Jesus Christ our Lord. Amen.",
        prayerAfterCommunion: "Merciful Father, you have refreshed us with this sacrament of love. Send your newly ordained servant(s) out in the power of the Spirit to proclaim your gospel and serve your people; through Jesus Christ our Lord. Amen.",
        psalmPrayer: "Faithful God, teach your servants the way of your statutes, that they may proclaim your word with boldness and walk in your truth; through Jesus Christ our Lord. Amen.",
        readings: {
          reading1: {
            tracks: [
              {
                label: "Option 1: Isaiah 6:1-8 (Here Am I; Send Me!)",
                citation: "Isaiah 6:1-8",
                text: ""
              },
              {
                label: "Option 2: Jeremiah 1:4-9 (Appointed a Prophet)",
                citation: "Jeremiah 1:4-9",
                text: ""
              },
              {
                label: "Option 3: Numbers 11:16-17, 24-25 (Sharing the Burden of Leadership)",
                citation: "Numbers 11:16-17, 24-25",
                text: ""
              }
            ],
            selectedTrack: 0
          },
          psalm: {
            citation: "Psalm 119:33-40",
            verses: [
              { leader: "Teach me, O Lord, the way of your statutes, *", people: "and I shall keep it to the end." },
              { leader: "Give me understanding, and I shall keep your law; *", people: "I shall keep it with all my heart." },
              { leader: "Make me go in the path of your commandments, *", people: "for that is my desire." },
              { leader: "Behold, my delight is in your commandments; *", people: "O preserve my life in your righteousness." }
            ]
          },
          reading2: {
            citation: "1 Peter 5:1-4",
            text: ""
          },
          gospel: {
            citation: "John 20:19-23",
            text: ""
          }
        }
      },
      new_ministry_occasion: {
        name: "Celebration of a New Ministry / Induction / Commissioning (BAS p. 667)",
        season: "Covenant in Ministry (White/Red)",
        prefaceKey: "apostles_ordination",
        colorBadge: "bg-amber-100 text-black border-amber-300",
        collect: "Almighty God, by your grace alone we are accepted and called to service in your kingdom. Strengthen your servants in the ministry to which you have called them, and unite this parish family in mutual love, prayer, and witness; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
        prayerOverGifts: "God of all ministry, receive our gifts of bread and wine, and renew us in our shared baptismal vocation to serve the world in Christ's name. Amen.",
        prayerAfterCommunion: "Gracious God, you have fed us with the one bread of life. Grant that clergy and people together may build up the body of Christ in love and faithfulness; through Jesus Christ our Lord. Amen.",
        psalmPrayer: "God of unity and peace, bind us together in the bond of your Spirit, that our life together may be a sign of your kingdom; through Jesus Christ our Lord. Amen.",
        readings: {
          reading1: {
            tracks: [
              {
                label: "Option 1: Joshua 1:7-9 (Be Strong and Courageous)",
                citation: "Joshua 1:7-9",
                text: ""
              },
              {
                label: "Option 2: Isaiah 61:1-3 (Anointed to Bring Good News)",
                citation: "Isaiah 61:1-3",
                text: ""
              }
            ],
            selectedTrack: 0
          },
          psalm: {
            citation: "Psalm 133",
            verses: [
              { leader: "Oh, how good and pleasant it is, *", people: "when brethren live together in unity!" },
              { leader: "It is like fine oil upon the head *", people: "that runs down upon the beard," },
              { leader: "Upon the beard of Aaron, *", people: "and runs down upon the collar of his robe." },
              { leader: "For there the Lord has promised his blessing: *", people: "even life for evermore." }
            ]
          },
          reading2: {
            citation: "1 Corinthians 12:4-13",
            text: ""
          },
          gospel: {
            citation: "John 15:9-16",
            text: ""
          }
        }
      },
      custom: {
        name: "Custom Service / Parish Occasion",
        season: "General Liturgy",
        prefaceKey: "lords_day",
        colorBadge: "bg-stone-200 text-stone-800 border-stone-400",
        collect: "Lord God of our salvation, hear us as we gather in your holy presence. Grant us hearts open to your word, minds ready to receive your grace, and lives dedicated to the praise of your glory; through Jesus Christ our Lord. Amen.",
        prayerOverGifts: "Gracious God, accept the offerings we bring this day, and sustain us by the gift of your presence; through Jesus Christ our Lord. Amen.",
        prayerAfterCommunion: "Almighty God, may we who have been nourished at this table grow in love and holiness, and serve you faithfully in the world; through Jesus Christ our Lord. Amen.",
        psalmPrayer: "Good Shepherd of your people, you lead us beside still waters and restore our souls. Guide us in the paths of righteousness for your name's sake; through Jesus Christ our Lord. Amen.",
        readings: {
          reading1: {
            tracks: [
              {
                label: "Custom First Reading",
                citation: "Old Testament Reading",
                text: ""
              }
            ],
            selectedTrack: 0
          },
          psalm: {
            citation: "Psalm 23",
            verses: [
              { leader: "The Lord is my shepherd; *", people: "I shall not want." },
              { leader: "He makes me lie down in green pastures *", people: "and leads me beside still waters." },
              { leader: "He revives my soul *", people: "and guides me along right pathways for his name's sake." },
              { leader: "Surely your goodness and mercy shall follow me all the days of my life, *", people: "and I will dwell in the house of the Lord for ever." }
            ]
          },
          reading2: {
            citation: "New Testament Epistle",
            text: ""
          },
          gospel: {
            citation: "The Holy Gospel",
            text: ""
          }
        }
      }
    };

    const PROPER_PREFACES = {
      lords_day: "For you are the source of light and life; you made us in your image, and called us to new life in Jesus Christ our Lord.",
      advent: "Because you sent your beloved Son to redeem us from sin and death, and to make us heirs in him of everlasting life; that when he shall come again in power and great triumph to judge the world, we may without shame or fear rejoice to behold his appearing.",
      incarnation: "Because you gave Jesus Christ your only Son to be born at this time for us; who, by the operation of the Holy Spirit, was made incarnate of the Virgin Mary, to make us clean from all sin.",
      epiphany: "Because in the mystery of the Word made flesh, you have caused a new light to shine in our hearts, to give the knowledge of your glory in the face of your Son Jesus Christ our Lord.",
      lent: "Because you bid your faithful people cleanse their hearts, and prepare with joy for the paschal feast; that, fervent in prayer and in works of mercy, and renewed by your word and sacraments, they may come to the fullness of grace which you have prepared for those who love you.",
      easter: "But chiefly are we bound to praise you for the glorious resurrection of your Son Jesus Christ our Lord; for he is the true paschal lamb, who was offered for us, and has taken away the sin of the world; who by his death has destroyed death, and by his rising to life again has won for us everlasting life.",
      pentecost: "Because by the mystery of the Holy Spirit, poured out upon the apostles, you have brought the Church into being and led it into all truth, giving it power to proclaim your gospel to every nation.",
      trinity: "For with your co-eternal Son and Holy Spirit, you are one God, one Lord, in Trinity of Persons and in Unity of Being; and we celebrate the one and equal glory of you, O Father, and of the Son, and of the Holy Spirit.",
      allsaints: "For in the multitude of your saints you have surrounded us with so great a cloud of witnesses, that we, rejoicing in their fellowship, may run with patience the race that is set before us, and together with them may receive the crown of glory that never fades away.",
      baptism: "Because in Jesus Christ our Lord you have received us as your sons and daughters, made us citizens of your kingdom, and given us the Holy Spirit to guide us into all truth.",
      marriage: "Because in the love of wife and husband, you have given us an image of the heavenly Jerusalem, adorned as a bride for her bridegroom, your Son Jesus Christ our Lord; who loved her and gave himself for his Church, that he might make her holy and without blemish.",
      commemoration_dead: "Through Jesus Christ our Lord; who rose victorious from the dead, and comforts us with the blessed hope of everlasting life. For to your faithful people, O Lord, life is changed, not ended; and when our mortal body lies in death, there is prepared for us a dwelling place eternal in the heavens.",
      apostles_ordination: "Through the great shepherd of your flock, Jesus Christ our Lord; who after his resurrection sent forth his apostles to preach the gospel and to teach all nations; and promised to be with them always, even to the end of the ages."
    };

    const CUSTOM_TEMPLATES = {
      hymn: {
        heading: "Congregational Hymn (Common Praise)",
        speaker: "All",
        rubric: "All stand as able and join in singing the appointed hymn.",
        body: "Hymn #384: Praise to the Holiest in the Height\n1. Praise to the Holiest in the height, and in the depth be praise;\nin all his words most wonderful, most sure in all his ways.",
        response: ""
      },
      land_ack: {
        heading: "Territorial Land Acknowledgement",
        speaker: "Officiant",
        rubric: "The officiating leader acknowledges the traditional territory and covenant relationship.",
        body: "We gather today on the traditional territory of the Michi Saagiig Anishinaabeg, covered by the Williams Treaties and Treaty 20. As followers of Christ called to the ministry of reconciliation, we give thanks for the Indigenous stewards of this land across generations, and we commit ourselves to walking together in truth, respect, and right relationship.",
        response: "May we walk together in peace and justice."
      },
      announcements: {
        heading: "Welcome & Parish Announcements",
        speaker: "Leader",
        rubric: "The congregation is seated for brief parish notices and community updates.",
        body: "Welcome to our worship service today. Coffee and fellowship follow the service in the Parish Hall. Please note our upcoming mid-week study and community outreach opportunities.",
        response: ""
      },
      childrens_talk: {
        heading: "Children's Focus / All-Age Homily",
        speaker: "Leader",
        rubric: "Children and youth are invited forward to the chancel steps.",
        body: "Let us pray together: Loving God, thank you for welcoming children into your arms. Open our ears to hear your story and our hands to share your love.",
        response: "Amen."
      },
      healing_rite: {
        heading: "Laying on of Hands & Anointing (BAS p. 555)",
        speaker: "Celebrant",
        rubric: "Those desiring prayer for healing for themselves or others come forward. The minister lays hands upon each person and may anoint them with oil.",
        body: "N., I lay my hands upon you [and anoint you with oil] in the name of the Father, and of the Son, and of the Holy Spirit, beseeching our Lord Jesus Christ to sustain you with his presence, to drive away all sickness of body and spirit, and to give you that victory of life and peace which will enable you to serve him both now and evermore.",
        response: "Amen."
      },
      baptism_renewal: {
        heading: "The Baptismal Covenant (BAS p. 158)",
        speaker: "Celebrant & People",
        rubric: "All stand as the celebrant leads the renewal of baptismal promises.",
        body: "Celebrant: Will you continue in the apostles\' teaching and fellowship, in the breaking of bread, and in the prayers?\nPeople: I will, with God\'s help.\nCelebrant: Will you persevere in resisting evil and, whenever you fall into sin, repent and return to the Lord?\nPeople: I will, with God\'s help.\nCelebrant: Will you proclaim by word and example the good news of God in Christ?\nPeople: I will, with God\'s help.\nCelebrant: Will you seek and serve Christ in all persons, loving your neighbour as yourself?\nPeople: I will, with God\'s help.\nCelebrant: Will you strive for justice and peace among all people, and respect the dignity of every human being?\nPeople: I will, with God\'s help.",
        response: ""
      },
      pastoral_blessing: {
        heading: "Pastoral Blessing (Birthdays & Anniversaries)",
        speaker: "Celebrant",
        rubric: "Those celebrating birthdays, anniversaries, or milestones are invited to stand.",
        body: "Watch over your children, O Lord, as their days increase; bless and guide them wherever they may be. Strengthen them when they stand; comfort them when discouraged or sorrowful; raise them up if they fall; and in their hearts may your peace which passes understanding abide all the days of their lives; through Jesus Christ our Lord.",
        response: "Amen."
      },
      banns: {
        heading: "Publication of the Banns of Marriage (BAS p. 549)",
        speaker: "Officiant",
        rubric: "Published after the notices or lessons.",
        body: "I publish the banns of marriage between N. of [place] and N. of [place]. If any of you know cause or just impediment why these two persons should not be joined together in holy matrimony, you are to declare it. This is the [first / second / third] time of asking.",
        response: ""
      },
      custom_reading: {
        heading: "Additional Reading / Canticle",
        speaker: "Reader",
        rubric: "The people sit for the reading.",
        body: "Enter the citation and text of the additional reading or canticle here.",
        response: "Thanks be to God."
      },
      commissioning_lay: {
        heading: "Commissioning of Lay Ministries / LPAs & Lay Readers",
        speaker: "Officiant",
        rubric: "Those being commissioned stand before the congregation.",
        body: "Brothers and sisters in Christ, we are all baptized by the one Spirit into one Body, and given gifts for a variety of ministries for the common good. Our purpose is to commission these persons in the name of God and of this congregation to the special ministry of [Lay Pastoral Assistant / Lay Reader / Liturgical Minister].\n\nOfficiant: Will you endeavour to pattern your life and ministry in accordance with the teaching of Christ?\nCandidates: I will, with God\'s help.\n\nOfficiant: Almighty God, look with favour upon these your servants affirming their commitment to follow Christ and to serve in his name. Give them courage, patience, and vision; and strengthen us all in our Christian vocation of witness to the world, and of service to others; through Jesus Christ our Lord.",
        response: "Amen."
      },
      home_communion: {
        heading: "Communion under Special Circumstances (BAS p. 557)",
        speaker: "Minister",
        rubric: "For administration of the reserved sacrament to the sick or homebound by a priest, deacon, or licensed lay pastoral assistant.",
        body: "Peace be to this house [place], and to all who dwell in it.\n\nAlmighty Father, whose dear Son, on the night before he suffered, instituted the Sacrament of his Body and Blood: Mercifully grant that we may receive it thankfully in remembrance of Jesus Christ our Lord, who in these holy mysteries gives us a pledge of eternal life; who lives and reigns for ever and ever.",
        response: "Amen."
      },
      thanksgiving_child: {
        heading: "Thanksgiving for the Gift of a Child (BAS p. 519)",
        speaker: "Celebrant",
        rubric: "The parents and family gather before the congregation with the child.",
        body: "Heavenly Father, you sent your own Son into this world as a child of human parents. We thank you for the life of this child N., entrusted to the care of N. and N. Help us to support this family with our love and prayers, that this child may grow in wisdom and stature, and in favour with God and all people; through Jesus Christ our Lord.",
        response: "Amen."
      },
      emergency_baptism: {
        heading: "Emergency Baptism (BAS p. 166)",
        speaker: "Minister",
        rubric: "In an emergency, any baptized person may administer Holy Baptism by pouring water upon the candidate, saying:",
        body: "N., I baptize you in the name of the Father, and of the Son, and of the Holy Spirit. Amen.\n\n(Followed by The Lord's Prayer and:)\nHeavenly Father, we thank you that by water and the Holy Spirit you have bestowed upon this your servant the forgiveness of sin, and have raised him/her to the new life of grace. Sustain him/her, O Lord, in your Holy Spirit, and bring him/her to the fullness of your peace; through Jesus Christ our Lord.",
        response: "Amen."
      },
      prayers_dying: {
        heading: "Prayers with the Dying & Commendation at Death (BAS p. 562)",
        speaker: "Minister",
        rubric: "The minister may lay hands gently upon the dying person.",
        body: "Depart, O Christian soul, out of this world;\nin the name of God the Father Almighty who created you;\nin the name of Jesus Christ who redeemed you;\nin the name of the Holy Spirit who sanctifies you.\nMay your rest be this day in peace, and your dwelling place in the Paradise of God.",
        response: "Amen."
      },
      custom_prayer: {
        heading: "Special Parish Collect or Prayer",
        speaker: "Celebrant",
        rubric: "The community prays together.",
        body: "Gracious God, pour out your Spirit upon this parish family, and guide us in our ministry to our neighbours; through Jesus Christ our Lord.",
        response: "Amen."
      }
    };

    const RITE_SEQUENCES = {
      eucharist: [
        { id: "processional_hymn", type: "custom", enabled: false, customData: { heading: "Processional Hymn", speaker: "All", rubric: "The people stand as the ministers process in.", body: "Processional Hymn: CP #___", response: "" } },
        { id: "land_ack", type: "custom", enabled: false, customData: Object.assign({}, CUSTOM_TEMPLATES.land_ack) },
        { id: "greeting", type: "builtin", label: "Gathering Greeting (BAS p. 185)", section: "The Gathering of the Community", enabled: true },
        { id: "collect_purity", type: "builtin", label: "Collect for Purity (BAS p. 185)", section: "The Gathering of the Community", enabled: true },
        { id: "canticle_praise", type: "builtin", label: "Hymn of Praise / Gloria / Kyrie", section: "The Gathering of the Community", enabled: true },
        { id: "collect_day", type: "builtin", label: "The Collect of the Day", section: "The Gathering of the Community", enabled: true },
        { id: "reading1", type: "builtin", label: "The First Reading (Old Testament)", section: "The Proclamation of the Word", enabled: true },
        { id: "psalm", type: "builtin", label: "The Psalm (Responsive + Psalm Prayer)", section: "The Proclamation of the Word", enabled: true },
        { id: "reading2", type: "builtin", label: "The Second Reading (Epistle)", section: "The Proclamation of the Word", enabled: true },
        { id: "gradual_gospel", type: "builtin", label: "Gospel Acclamation & The Holy Gospel", section: "The Proclamation of the Word", enabled: true },
        { id: "sermon", type: "builtin", label: "The Sermon / Homily", section: "The Proclamation of the Word", enabled: true },
        { id: "creed", type: "builtin", label: "Affirmation of Faith (Creed / Shema)", section: "The Proclamation of the Word", enabled: true },
        { id: "prayers_people", type: "builtin", label: "The Prayers of the People (Litany)", section: "The Proclamation of the Word", enabled: true },
        { id: "confession", type: "builtin", label: "Confession and Absolution (BAS p. 191)", section: "The Proclamation of the Word", enabled: true },
        { id: "peace", type: "builtin", label: "The Peace (BAS p. 192)", section: "The Proclamation of the Word", enabled: true },
        { id: "offertory_gifts", type: "builtin", label: "Offertory & Prayer over the Gifts", section: "The Celebration of the Eucharist", enabled: true },
        { id: "eucharistic_prayer", type: "builtin", label: "The Great Thanksgiving (Eucharistic Prayer)", section: "The Celebration of the Eucharist", enabled: true },
        { id: "lords_prayer", type: "builtin", label: "The Lord's Prayer (BAS p. 211)", section: "The Celebration of the Eucharist", enabled: true },
        { id: "fraction_communion", type: "builtin", label: "Breaking of the Bread & Communion", section: "The Celebration of the Eucharist", enabled: true },
        { id: "post_communion", type: "builtin", label: "Prayer after Communion", section: "The Sending Forth of the Community", enabled: true },
        { id: "doxology", type: "builtin", label: "The Doxology (BAS p. 214)", section: "The Sending Forth of the Community", enabled: true },
        { id: "blessing_dismissal", type: "builtin", label: "The Blessing & Dismissal", section: "The Sending Forth of the Community", enabled: true }
      ],
      lenten_eucharist: [
        { id: "greeting", type: "builtin", label: "Lenten Gathering Greeting (BAS p. 185)", section: "The Gathering of the Community", enabled: true },
        { id: "collect_purity", type: "builtin", label: "Collect for Purity (BAS p. 185)", section: "The Gathering of the Community", enabled: true },
        { id: "confession", type: "builtin", label: "Penitential Rite: Confession & Absolution (BAS p. 188)", section: "The Gathering of the Community", enabled: true },
        { id: "canticle_praise", type: "builtin", label: "Kyrie Eleison / Trisagion (BAS p. 186)", section: "The Gathering of the Community", enabled: true },
        { id: "collect_day", type: "builtin", label: "The Collect of the Day", section: "The Gathering of the Community", enabled: true },
        { id: "reading1", type: "builtin", label: "The First Reading", section: "The Proclamation of the Word", enabled: true },
        { id: "psalm", type: "builtin", label: "The Psalm", section: "The Proclamation of the Word", enabled: true },
        { id: "reading2", type: "builtin", label: "The Second Reading", section: "The Proclamation of the Word", enabled: true },
        { id: "gradual_gospel", type: "builtin", label: "Lenten Tract & The Holy Gospel", section: "The Proclamation of the Word", enabled: true },
        { id: "sermon", type: "builtin", label: "The Sermon / Homily", section: "The Proclamation of the Word", enabled: true },
        { id: "creed", type: "builtin", label: "The Nicene or Apostles' Creed", section: "The Proclamation of the Word", enabled: true },
        { id: "prayers_people", type: "builtin", label: "The Prayers of the People", section: "The Proclamation of the Word", enabled: true },
        { id: "peace", type: "builtin", label: "The Peace", section: "The Proclamation of the Word", enabled: true },
        { id: "offertory_gifts", type: "builtin", label: "Prayer over the Gifts", section: "The Celebration of the Eucharist", enabled: true },
        { id: "eucharistic_prayer", type: "builtin", label: "The Great Thanksgiving", section: "The Celebration of the Eucharist", enabled: true },
        { id: "lords_prayer", type: "builtin", label: "The Lord's Prayer", section: "The Celebration of the Eucharist", enabled: true },
        { id: "fraction_communion", type: "builtin", label: "Breaking of the Bread & Communion", section: "The Celebration of the Eucharist", enabled: true },
        { id: "post_communion", type: "builtin", label: "Prayer after Communion", section: "The Sending Forth of the Community", enabled: true },
        { id: "blessing_dismissal", type: "builtin", label: "Solemn Prayer over the People & Dismissal", section: "The Sending Forth of the Community", enabled: true }
      ],
      word_lay: [
        { id: "greeting", type: "builtin", label: "Opening Greeting", section: "The Gathering of the Community", enabled: true },
        { id: "collect_purity", type: "builtin", label: "Collect for Purity", section: "The Gathering of the Community", enabled: true },
        { id: "canticle_praise", type: "builtin", label: "Opening Praise (Gloria / Venite / Jubilate)", section: "The Gathering of the Community", enabled: true },
        { id: "collect_day", type: "builtin", label: "The Collect of the Day", section: "The Gathering of the Community", enabled: true },
        { id: "reading1", type: "builtin", label: "The First Reading", section: "The Proclamation of the Word", enabled: true },
        { id: "psalm", type: "builtin", label: "The Psalm (Responsive)", section: "The Proclamation of the Word", enabled: true },
        { id: "reading2", type: "builtin", label: "The Second Reading", section: "The Proclamation of the Word", enabled: true },
        { id: "gradual_gospel", type: "builtin", label: "The Holy Gospel", section: "The Proclamation of the Word", enabled: true },
        { id: "sermon", type: "builtin", label: "The Sermon / Homily", section: "The Proclamation of the Word", enabled: true },
        { id: "creed", type: "builtin", label: "Affirmation of Faith (Apostles' Creed / Shema)", section: "The Response to the Word", enabled: true },
        { id: "prayers_people", type: "builtin", label: "The Prayers of the People & Thanksgiving", section: "The Response to the Word", enabled: true },
        { id: "confession", type: "builtin", label: "Confession of Sin & Assurance of Pardon", section: "The Response to the Word", enabled: true },
        { id: "peace", type: "builtin", label: "The Peace", section: "The Response to the Word", enabled: true },
        { id: "lords_prayer", type: "builtin", label: "The Lord's Prayer", section: "The Sending Forth", enabled: true },
        { id: "doxology", type: "builtin", label: "The Doxology & Grace", section: "The Sending Forth", enabled: true },
        { id: "blessing_dismissal", type: "builtin", label: "Concluding Grace & Dismissal", section: "The Sending Forth", enabled: true }
      ],
      morning_prayer: [
        { id: "greeting", type: "builtin", label: "Opening Sentence & Invitatory (BAS p. 47)", section: "The Approach", enabled: true },
        { id: "confession", type: "builtin", label: "Penitential Introduction (BAS p. 46)", section: "The Approach", enabled: true },
        { id: "canticle_praise", type: "builtin", label: "Invitatory Psalm: Venite or Jubilate (BAS p. 49)", section: "The Approach", enabled: true },
        { id: "psalm", type: "builtin", label: "The Appointed Psalmody & Psalm Prayer", section: "The Proclamation of the Word", enabled: true },
        { id: "reading1", type: "builtin", label: "The First Reading (Old Testament)", section: "The Proclamation of the Word", enabled: true },
        { id: "reading2", type: "builtin", label: "The Second Reading (New Testament)", section: "The Proclamation of the Word", enabled: true },
        { id: "gradual_gospel", type: "builtin", label: "Gospel Canticle (Benedictus) & Gospel", section: "The Proclamation of the Word", enabled: true },
        { id: "sermon", type: "builtin", label: "Homily or Reflection", section: "The Proclamation of the Word", enabled: true },
        { id: "creed", type: "builtin", label: "Affirmation of Faith: Hear, O Israel or Apostles' Creed", section: "The Affirmation & Prayer", enabled: true },
        { id: "prayers_people", type: "builtin", label: "Intercessions and Thanksgivings (Litany)", section: "The Affirmation & Prayer", enabled: true },
        { id: "collect_day", type: "builtin", label: "The Collect of the Day", section: "The Affirmation & Prayer", enabled: true },
        { id: "lords_prayer", type: "builtin", label: "The Lord's Prayer (BAS p. 54)", section: "The Affirmation & Prayer", enabled: true },
        { id: "blessing_dismissal", type: "builtin", label: "Dismissal & The Grace (BAS p. 55)", section: "The Sending Forth", enabled: true }
      ],
      evening_prayer: [
        { id: "greeting", type: "builtin", label: "Service of Light & Greeting (BAS p. 62)", section: "The Service of Light", enabled: true },
        { id: "canticle_praise", type: "builtin", label: "O Gracious Light (Phos Hilaron, BAS p. 62)", section: "The Service of Light", enabled: true },
        { id: "psalm", type: "builtin", label: "The Appointed Psalmody & Psalm Prayer", section: "The Proclamation of the Word", enabled: true },
        { id: "reading1", type: "builtin", label: "The First Reading", section: "The Proclamation of the Word", enabled: true },
        { id: "gradual_gospel", type: "builtin", label: "The Song of Mary (Magnificat) & Gospel", section: "The Proclamation of the Word", enabled: true },
        { id: "sermon", type: "builtin", label: "Evening Reflection", section: "The Proclamation of the Word", enabled: true },
        { id: "creed", type: "builtin", label: "Affirmation of Faith (Hear, O Israel / Creed)", section: "The Prayers", enabled: true },
        { id: "prayers_people", type: "builtin", label: "Evening Litany & Thanksgiving", section: "The Prayers", enabled: true },
        { id: "collect_day", type: "builtin", label: "The Collect of the Day & Collect for Peace", section: "The Prayers", enabled: true },
        { id: "lords_prayer", type: "builtin", label: "The Lord's Prayer (BAS p. 72)", section: "The Prayers", enabled: true },
        { id: "blessing_dismissal", type: "builtin", label: "Dismissal & The Grace", section: "The Sending Forth", enabled: true }
      ],
      baptism: [
        { id: "greeting", type: "builtin", label: "Baptismal Gathering Greeting (BAS p. 151)", section: "The Gathering of the Community", enabled: true },
        { id: "collect_purity", type: "builtin", label: "Collect for Purity (BAS p. 151)", section: "The Gathering of the Community", enabled: true },
        { id: "canticle_praise", type: "builtin", label: "Hymn of Praise / Gloria in Excelsis", section: "The Gathering of the Community", enabled: true },
        { id: "collect_day", type: "builtin", label: "The Collect of the Day", section: "The Gathering of the Community", enabled: true },
        { id: "reading1", type: "builtin", label: "The First Reading", section: "The Proclamation of the Word", enabled: true },
        { id: "psalm", type: "builtin", label: "The Psalm (Responsive)", section: "The Proclamation of the Word", enabled: true },
        { id: "reading2", type: "builtin", label: "The Second Reading (Epistle)", section: "The Proclamation of the Word", enabled: true },
        { id: "gradual_gospel", type: "builtin", label: "Gospel Acclamation & The Holy Gospel", section: "The Proclamation of the Word", enabled: true },
        { id: "sermon", type: "builtin", label: "The Sermon / Homily", section: "The Proclamation of the Word", enabled: true },
        { id: "baptism_presentation", type: "builtin", label: "Presentation & Examination of the Candidates (BAS p. 153)", section: "Presentation and Examination of the Candidates", enabled: true },
        { id: "baptism_prayers_covenant", type: "builtin", label: "Prayers for the Candidates & The Baptismal Covenant (BAS pp. 156-159)", section: "The Baptismal Covenant", enabled: true },
        { id: "baptism_water_thanksgiving", type: "builtin", label: "Thanksgiving over the Water (BAS p. 160)", section: "The Baptism", enabled: true },
        { id: "baptism_act_welcome", type: "builtin", label: "The Baptism, Chrismation, Giving of the Light & Welcome (BAS pp. 161-162)", section: "The Baptism", enabled: true },
        { id: "peace", type: "builtin", label: "The Peace (BAS p. 163)", section: "The Celebration of the Eucharist", enabled: true },
        { id: "offertory_gifts", type: "builtin", label: "Offertory & Prayer over the Gifts", section: "The Celebration of the Eucharist", enabled: true },
        { id: "eucharistic_prayer", type: "builtin", label: "The Great Thanksgiving (Eucharistic Prayer)", section: "The Celebration of the Eucharist", enabled: true },
        { id: "lords_prayer", type: "builtin", label: "The Lord's Prayer", section: "The Celebration of the Eucharist", enabled: true },
        { id: "fraction_communion", type: "builtin", label: "Breaking of the Bread & Communion", section: "The Celebration of the Eucharist", enabled: true },
        { id: "post_communion", type: "builtin", label: "Prayer after Communion", section: "The Sending Forth", enabled: true },
        { id: "blessing_dismissal", type: "builtin", label: "The Blessing & Dismissal", section: "The Sending Forth", enabled: true }
      ],
      confirmation: [
        { id: "greeting", type: "builtin", label: "Episcopal Gathering Greeting (BAS p. 624)", section: "The Gathering of the Community", enabled: true },
        { id: "canticle_praise", type: "builtin", label: "Hymn of Praise / Gloria in Excelsis", section: "The Gathering of the Community", enabled: true },
        { id: "collect_day", type: "builtin", label: "The Collect for Confirmation (BAS p. 624)", section: "The Gathering of the Community", enabled: true },
        { id: "reading1", type: "builtin", label: "The First Reading", section: "The Proclamation of the Word", enabled: true },
        { id: "psalm", type: "builtin", label: "The Psalm (Responsive)", section: "The Proclamation of the Word", enabled: true },
        { id: "reading2", type: "builtin", label: "The Second Reading", section: "The Proclamation of the Word", enabled: true },
        { id: "gradual_gospel", type: "builtin", label: "Gospel Acclamation & The Holy Gospel", section: "The Proclamation of the Word", enabled: true },
        { id: "sermon", type: "builtin", label: "The Bishop's Sermon / Homily", section: "The Proclamation of the Word", enabled: true },
        { id: "confirmation_presentation", type: "builtin", label: "Presentation of Candidates for Confirmation / Reception (BAS p. 625)", section: "The Confirmation, Reception & Reaffirmation", enabled: true },
        { id: "baptism_prayers_covenant", type: "builtin", label: "Renewal of the Baptismal Covenant (BAS p. 626)", section: "The Confirmation, Reception & Reaffirmation", enabled: true },
        { id: "confirmation_laying_hands", type: "builtin", label: "Prayer for the Spirit & Laying on of Hands (BAS pp. 627-628)", section: "The Confirmation, Reception & Reaffirmation", enabled: true },
        { id: "peace", type: "builtin", label: "The Peace (BAS p. 628)", section: "The Celebration of the Eucharist", enabled: true },
        { id: "offertory_gifts", type: "builtin", label: "Offertory & Prayer over the Gifts", section: "The Celebration of the Eucharist", enabled: true },
        { id: "eucharistic_prayer", type: "builtin", label: "The Great Thanksgiving", section: "The Celebration of the Eucharist", enabled: true },
        { id: "lords_prayer", type: "builtin", label: "The Lord's Prayer", section: "The Celebration of the Eucharist", enabled: true },
        { id: "fraction_communion", type: "builtin", label: "Breaking of the Bread & Communion", section: "The Celebration of the Eucharist", enabled: true },
        { id: "post_communion", type: "builtin", label: "Prayer after Communion", section: "The Sending Forth", enabled: true },
        { id: "blessing_dismissal", type: "builtin", label: "Episcopal Blessing & Dismissal", section: "The Sending Forth", enabled: true }
      ],
      marriage: [
        { id: "marriage_exhortation", type: "builtin", label: "Gathering & Exhortation on Christian Marriage (BAS p. 528)", section: "The Gathering of the Community", enabled: true },
        { id: "marriage_declaration", type: "builtin", label: "Declaration of Intent & Congregation's Support (BAS p. 529)", section: "The Gathering of the Community", enabled: true },
        { id: "collect_day", type: "builtin", label: "The Collect for Marriage (BAS p. 530)", section: "The Gathering of the Community", enabled: true },
        { id: "reading1", type: "builtin", label: "The First Reading", section: "The Proclamation of the Word", enabled: true },
        { id: "psalm", type: "builtin", label: "The Psalm (Responsive)", section: "The Proclamation of the Word", enabled: true },
        { id: "reading2", type: "builtin", label: "The Second Reading", section: "The Proclamation of the Word", enabled: true },
        { id: "gradual_gospel", type: "builtin", label: "Gospel Acclamation & The Holy Gospel", section: "The Proclamation of the Word", enabled: true },
        { id: "sermon", type: "builtin", label: "The Wedding Homily", section: "The Proclamation of the Word", enabled: true },
        { id: "marriage_vows", type: "builtin", label: "The Exchange of Vows (BAS p. 533)", section: "The Marriage", enabled: true },
        { id: "marriage_rings", type: "builtin", label: "Blessing & Giving of Rings and Proclamation (BAS p. 534)", section: "The Marriage", enabled: true },
        { id: "prayers_people", type: "builtin", label: "The Prayers of the People (BAS p. 535)", section: "The Blessing of the Marriage", enabled: true },
        { id: "marriage_blessing", type: "builtin", label: "The Nuptial Blessing (BAS p. 536)", section: "The Blessing of the Marriage", enabled: true },
        { id: "marriage_signing", type: "builtin", label: "Signing of the Marriage Register & Anthems", section: "The Blessing of the Marriage", enabled: true },
        { id: "peace", type: "builtin", label: "The Peace (BAS p. 538)", section: "The Blessing of the Marriage", enabled: true },
        { id: "offertory_gifts", type: "builtin", label: "Offertory & Prayer over the Gifts (Nuptial Eucharist)", section: "The Celebration of the Eucharist", enabled: false },
        { id: "eucharistic_prayer", type: "builtin", label: "The Great Thanksgiving (Nuptial Eucharist)", section: "The Celebration of the Eucharist", enabled: false },
        { id: "lords_prayer", type: "builtin", label: "The Lord's Prayer", section: "The Sending Forth", enabled: true },
        { id: "fraction_communion", type: "builtin", label: "Breaking of the Bread & Communion (Nuptial Eucharist)", section: "The Celebration of the Eucharist", enabled: false },
        { id: "post_communion", type: "builtin", label: "Prayer after Communion (Nuptial Eucharist)", section: "The Sending Forth", enabled: false },
        { id: "blessing_dismissal", type: "builtin", label: "The Blessing & Dismissal", section: "The Sending Forth", enabled: true }
      ],
      funeral: [
        { id: "funeral_reception", type: "builtin", label: "Reception of the Body & Easter Sentences (BAS p. 571)", section: "The Gathering of the Community", enabled: true },
        { id: "greeting", type: "builtin", label: "Easter Greeting & Invitation to Prayer (BAS p. 574)", section: "The Gathering of the Community", enabled: true },
        { id: "collect_day", type: "builtin", label: "The Collect at a Funeral (BAS p. 575)", section: "The Gathering of the Community", enabled: true },
        { id: "funeral_eulogy", type: "builtin", label: "Words of Remembrance / Eulogy (Optional)", section: "The Gathering of the Community", enabled: true },
        { id: "reading1", type: "builtin", label: "The First Reading (Old Testament)", section: "The Proclamation of the Word", enabled: true },
        { id: "psalm", type: "builtin", label: "The Psalm (Psalm 23)", section: "The Proclamation of the Word", enabled: true },
        { id: "reading2", type: "builtin", label: "The Second Reading (New Testament)", section: "The Proclamation of the Word", enabled: true },
        { id: "gradual_gospel", type: "builtin", label: "Gospel Acclamation & The Holy Gospel", section: "The Proclamation of the Word", enabled: true },
        { id: "sermon", type: "builtin", label: "The Funeral Homily", section: "The Proclamation of the Word", enabled: true },
        { id: "creed", type: "builtin", label: "The Apostles' Creed / Baptismal Credo (BAS p. 578)", section: "The Proclamation of the Word", enabled: true },
        { id: "funeral_prayers", type: "builtin", label: "The Funeral Litany & Thanksgiving (BAS p. 579)", section: "The Prayers of the People", enabled: true },
        { id: "peace", type: "builtin", label: "The Peace", section: "The Celebration of the Eucharist", enabled: true },
        { id: "offertory_gifts", type: "builtin", label: "Offertory & Prayer over the Gifts (Funeral Eucharist)", section: "The Celebration of the Eucharist", enabled: true },
        { id: "eucharistic_prayer", type: "builtin", label: "The Great Thanksgiving (with Preface for the Dead)", section: "The Celebration of the Eucharist", enabled: true },
        { id: "lords_prayer", type: "builtin", label: "The Lord's Prayer", section: "The Celebration of the Eucharist", enabled: true },
        { id: "fraction_communion", type: "builtin", label: "Breaking of the Bread & Communion", section: "The Celebration of the Eucharist", enabled: true },
        { id: "post_communion", type: "builtin", label: "Prayer after Communion (BAS p. 581)", section: "The Commendation and Committal", enabled: true },
        { id: "funeral_commendation", type: "builtin", label: "The Commendation: 'Give rest, O Christ' (BAS p. 582)", section: "The Commendation and Committal", enabled: true },
        { id: "funeral_committal", type: "builtin", label: "The Committal: 'Earth to earth, ashes to ashes' (BAS p. 585)", section: "The Commendation and Committal", enabled: true },
        { id: "blessing_dismissal", type: "builtin", label: "Concluding Blessing & Dismissal", section: "The Commendation and Committal", enabled: true }
      ],
      ordination: [
        { id: "greeting", type: "builtin", label: "Episcopal Greeting & Collect for Purity (BAS p. 643)", section: "The Gathering of the Community", enabled: true },
        { id: "ordination_presentation", type: "builtin", label: "The Presentation of the Candidate(s) (BAS p. 644 / p. 653)", section: "The Presentation", enabled: true },
        { id: "canticle_praise", type: "builtin", label: "Gloria in Excelsis (BAS p. 645)", section: "The Presentation", enabled: true },
        { id: "collect_day", type: "builtin", label: "The Collect for Ordination", section: "The Presentation", enabled: true },
        { id: "reading1", type: "builtin", label: "The First Reading", section: "The Proclamation of the Word", enabled: true },
        { id: "psalm", type: "builtin", label: "The Psalm", section: "The Proclamation of the Word", enabled: true },
        { id: "reading2", type: "builtin", label: "The Second Reading", section: "The Proclamation of the Word", enabled: true },
        { id: "gradual_gospel", type: "builtin", label: "Gospel Acclamation & The Holy Gospel", section: "The Proclamation of the Word", enabled: true },
        { id: "sermon", type: "builtin", label: "The Sermon / Charge to the Candidates", section: "The Proclamation of the Word", enabled: true },
        { id: "creed", type: "builtin", label: "The Nicene Creed", section: "The Examination", enabled: true },
        { id: "ordination_examination", type: "builtin", label: "The Examination of the Candidate(s) (BAS p. 645 / p. 654)", section: "The Examination", enabled: true },
        { id: "ordination_litany", type: "builtin", label: "The Litany for Ordinations & Veni Creator Spiritus (BAS p. 660)", section: "The Consecration", enabled: true },
        { id: "ordination_consecration", type: "builtin", label: "Laying on of Hands & Prayer of Consecration (BAS p. 647 / p. 656)", section: "The Consecration", enabled: true },
        { id: "ordination_vesting", type: "builtin", label: "Vesting & Giving of the Bible and Symbols of Office (BAS p. 650)", section: "The Consecration", enabled: true },
        { id: "peace", type: "builtin", label: "The Peace", section: "The Celebration of the Eucharist", enabled: true },
        { id: "offertory_gifts", type: "builtin", label: "Offertory & Prayer over the Gifts", section: "The Celebration of the Eucharist", enabled: true },
        { id: "eucharistic_prayer", type: "builtin", label: "The Great Thanksgiving (with Preface of Apostles & Ordinations)", section: "The Celebration of the Eucharist", enabled: true },
        { id: "lords_prayer", type: "builtin", label: "The Lord's Prayer", section: "The Celebration of the Eucharist", enabled: true },
        { id: "fraction_communion", type: "builtin", label: "Breaking of the Bread & Communion", section: "The Celebration of the Eucharist", enabled: true },
        { id: "post_communion", type: "builtin", label: "Prayer after Communion", section: "The Sending Forth", enabled: true },
        { id: "blessing_dismissal", type: "builtin", label: "Episcopal Blessing & Dismissal", section: "The Sending Forth", enabled: true }
      ],
      new_ministry: [
        { id: "greeting", type: "builtin", label: "Gathering Greeting & Collect for Purity (BAS p. 667)", section: "The Gathering of the Community", enabled: true },
        { id: "ministry_presentation", type: "builtin", label: "Presentation & Covenant of New Ministry (BAS p. 668)", section: "The Institution & Covenant", enabled: true },
        { id: "collect_day", type: "builtin", label: "The Collect for New Ministry", section: "The Proclamation of the Word", enabled: true },
        { id: "reading1", type: "builtin", label: "The First Reading", section: "The Proclamation of the Word", enabled: true },
        { id: "psalm", type: "builtin", label: "The Psalm (Psalm 133)", section: "The Proclamation of the Word", enabled: true },
        { id: "reading2", type: "builtin", label: "The Second Reading", section: "The Proclamation of the Word", enabled: true },
        { id: "gradual_gospel", type: "builtin", label: "Gospel Acclamation & The Holy Gospel", section: "The Proclamation of the Word", enabled: true },
        { id: "sermon", type: "builtin", label: "The Sermon / Homily", section: "The Proclamation of the Word", enabled: true },
        { id: "ministry_presentations_symbols", type: "builtin", label: "Presentation of the Symbols of Ministry (BAS p. 670)", section: "The Commissioning & Induction", enabled: true },
        { id: "prayers_people", type: "builtin", label: "Litany for the Mission of the Church", section: "The Commissioning & Induction", enabled: true },
        { id: "peace", type: "builtin", label: "The Peace & Welcome of the Community", section: "The Celebration of the Eucharist", enabled: true },
        { id: "offertory_gifts", type: "builtin", label: "Offertory & Prayer over the Gifts", section: "The Celebration of the Eucharist", enabled: true },
        { id: "eucharistic_prayer", type: "builtin", label: "The Great Thanksgiving", section: "The Celebration of the Eucharist", enabled: true },
        { id: "lords_prayer", type: "builtin", label: "The Lord's Prayer", section: "The Celebration of the Eucharist", enabled: true },
        { id: "fraction_communion", type: "builtin", label: "Breaking of the Bread & Communion", section: "The Celebration of the Eucharist", enabled: true },
        { id: "post_communion", type: "builtin", label: "Prayer after Communion", section: "The Sending Forth", enabled: true },
        { id: "blessing_dismissal", type: "builtin", label: "The Blessing & Dismissal", section: "The Sending Forth", enabled: true }
      ],
      reconciliation_sick: [
        { id: "greeting", type: "builtin", label: "Pastoral Greeting: 'Peace be to this house' (BAS p. 552)", section: "The Gathering", enabled: true },
        { id: "collect_day", type: "builtin", label: "Collect for Healing & Wholeness (BAS p. 552)", section: "The Gathering", enabled: true },
        { id: "reading1", type: "builtin", label: "The First Reading", section: "The Proclamation of the Word", enabled: true },
        { id: "psalm", type: "builtin", label: "The Psalm (Psalm 103)", section: "The Proclamation of the Word", enabled: true },
        { id: "reading2", type: "builtin", label: "The Second Reading (James 5:13-16)", section: "The Proclamation of the Word", enabled: true },
        { id: "gradual_gospel", type: "builtin", label: "The Holy Gospel", section: "The Proclamation of the Word", enabled: true },
        { id: "reconciliation_confession", type: "builtin", label: "Reconciliation of a Penitent, Laying on of Hands & Anointing (BAS pp. 555, 614)", section: "Ministry of Healing & Reconciliation", enabled: true },
        { id: "peace", type: "builtin", label: "The Peace", section: "Holy Communion", enabled: true },
        { id: "lords_prayer", type: "builtin", label: "The Lord's Prayer", section: "Holy Communion", enabled: true },
        { id: "fraction_communion", type: "builtin", label: "Communion from the Reserved Sacrament (BAS p. 557)", section: "Holy Communion", enabled: true },
        { id: "post_communion", type: "builtin", label: "Prayer after Communion", section: "The Sending Forth", enabled: true },
        { id: "blessing_dismissal", type: "builtin", label: "Pastoral Blessing & Dismissal", section: "The Sending Forth", enabled: true }
      ]
    };

    const INSTRUCTIVE_GUIDE = {
      rites: {
        eucharist: {
          title: "The Holy Eucharist (BAS p. 185)",
          significance: "The principal Sunday act of Christian worship in the Book of Alternative Services. Patterned on the ancient two-fold structure described by Justin Martyr (c. 150 AD), it unites the Proclamation of the Word (Scripture, Sermon, Creed, Intercessions, Confession, Peace) with the Celebration of the Eucharist (Preparation of Gifts, Great Thanksgiving, Breaking of the Bread, and Communion).",
          whenToUse: "Normative for Sundays, Principal Feasts, and major parish celebrations."
        },
        lenten_eucharist: {
          title: "Penitential / Lenten Eucharist (BAS p. 188)",
          significance: "Moves the Penitential Rite (Confession and Absolution) to the very beginning of the service during the Gathering, rather than after the Prayers of the People. Approaching the altar first through self-examination and God's mercy sets a solemn, reflective tone.",
          whenToUse: "Appointed for Ash Wednesday, the Sundays in Lent, or penitential occasions."
        },
        word_lay: {
          title: "Service of the Word / Lay-Led Liturgy (BAS p. 130)",
          significance: "Designed specifically for Lay Pastoral Assistants (LPAs), Lay Readers, or congregations when a priest is not present, or for non-eucharistic worship. It preserves the full Liturgy of the Word, uses the inclusive lay pardon prayer ('Almighty God have mercy upon us...'), and concludes with the Lord's Prayer, Doxology, and Grace.",
          whenToUse: "When a Lay Reader or LPA leads Sunday worship in the absence of a priest, or for mid-week/special Services of the Word."
        },
        morning_prayer: {
          title: "Morning Prayer: The Daily Office (BAS p. 47)",
          significance: "Rooted in the ancient cathedral and monastic daily prayer of the Church and Cranmer's Book of Common Prayer heritage. Morning Prayer sanctifies the beginning of the day with the Invitatory Psalm (Venite or Jubilate), appointed Psalmody, Scripture lessons, and the Gospel Canticle of Zechariah (Benedictus).",
          whenToUse: "Daily morning worship, lay-led Sunday Morning Prayer, or parish study gatherings."
        },
        evening_prayer: {
          title: "Evening Prayer: Service of Light (BAS p. 62)",
          significance: "Opens with the ancient Lucernarium (Service of Light) and the 3rd-century hymn Phos Hilaron ('O Gracious Light'), giving thanks for Christ as the light that no darkness can extinguish, followed by Psalmody, Scripture, and Mary's song of justice and mercy (Magnificat).",
          whenToUse: "Late afternoon or evening worship, Choral Evensong adaptations, or vigil services."
        },
        baptism: {
          title: "Holy Baptism with Eucharist (BAS p. 150)",
          significance: "The BAS restores Baptism to the main Sunday assembly as the foundational sacrament of Christian initiation. Candidates (or parents and godparents on behalf of infants) renounce evil, profess the Apostles' Creed, and join the whole congregation in renewing the six-fold Baptismal Covenant before the Thanksgiving over the Water, triple pouring/immersion, Chrismation (signing with oil), and receiving the lighted candle.",
          whenToUse: "Particularly appropriate at the Easter Vigil, Easter Day, Pentecost, All Saints' Day, the Baptism of the Lord, or when the Bishop is present."
        },
        confirmation: {
          title: "Confirmation, Reception & Reaffirmation of Vows (BAS p. 622)",
          significance: "An episcopal rite presided over by the Bishop. Those baptized in infancy make a mature public affirmation of faith (Confirmation); baptized Christians from other denominations are welcomed into the Anglican Communion (Reception); or adults renew their baptismal commitment (Reaffirmation) with the laying on of the Bishop's hands and prayer for the sevenfold gift of the Holy Spirit.",
          whenToUse: "Episcopal visitations and diocesan confirmation services."
        },
        marriage: {
          title: "Celebration and Blessing of a Marriage (BAS p. 528)",
          significance: "Presents Christian marriage as a lifelong covenant grounded in baptism. In Anglican theology, the bride and groom are the ministers of the sacrament to one another through their exchange of vows and rings, while the clergy and congregation act as witnesses and invoke God's nuptial blessing (with or without a Nuptial Eucharist).",
          whenToUse: "Weddings and blessings of civil marriages (toggle the Nuptial Eucharist blocks on or off depending on pastoral context)."
        },
        funeral: {
          title: "The Funeral Liturgy & Commendation (BAS p. 571)",
          significance: "Framed explicitly as an Easter liturgy of resurrection hope (hence white or purple vestments and the Paschal Candle standing by the coffin). It holds together honest human grief and Christian hope, culminating in the ancient Kontakion ('Give rest, O Christ, to your servant with your saints'), the Prayer of Commendation, and the Committal.",
          whenToUse: "Church funerals, memorial services (with ashes present or absent), and graveside committals."
        },
        ordination: {
          title: "The Ordination of a Bishop, Priest, or Deacon (BAS p. 634)",
          significance: "Grounds ordained ministry within the baptized people of God. Includes public presentation and acclamation by the assembly, the Bishop's examination, the prostration/kneeling during the Litany for Ordinations and Veni Creator Spiritus, and the epicletic Consecratory Prayer with the laying on of hands.",
          whenToUse: "Diocesan ordinations of deacons, priests (presbyters), or bishops."
        },
        new_ministry: {
          title: "Celebration of a New Ministry / Induction / Commissioning (BAS p. 667)",
          significance: "Celebrates the mutual covenant between a newly appointed incumbent (or commissioned lay leader) and the parish community, highlighted by the procession of symbols of ministry (Bible, baptismal water, canons, healing oil, church keys, and bread and wine).",
          whenToUse: "Parish inductions, installations, or commissioning of lay ministries."
        },
        reconciliation_sick: {
          title: "Ministry to the Sick & Reconciliation of a Penitent (BAS pp. 551, 613)",
          significance: "Provides pastoral rites for home, hospital, or chapel visitation: laying on of hands and anointing with oil for healing of body, mind, and spirit; personal confession and absolution (Reconciliation of a Penitent); and Communion from the Reserved Sacrament.",
          whenToUse: "Pastoral care visits by clergy or licensed Lay Pastoral Assistants (note: absolution and blessing of oil are reserved to a priest, while LPAs lead prayers for healing and administer reserved communion)."
        }
      },
      readingsGuide: {
        track1VsTrack2: "<strong>Track 1 vs. Track 2 (First Reading):</strong> During the Season after Pentecost, the Revised Common Lectionary offers two Old Testament approaches. <strong>Track 1 (Continuous)</strong> reads sequentially through major Hebrew Scripture narratives (Patriarchs, Moses, David, Prophets) week by week on their own terms. <strong>Track 2 (Complementary)</strong> selects an Old Testament passage specifically chosen to echo or illuminate the theme of the day's Gospel.",
        psalmAndPrayer: "<strong>The Psalm &amp; BAS Psalm Prayer:</strong> The Psalm is the community's lyrical meditation on the First Reading. A distinctive gift of the 1985 BAS is the <strong>Psalm Prayer</strong> (BAS pp. 705–861)—a brief collect prayed after a moment of silence that gathers up the themes of the Psalm in light of Christ's death and resurrection.",
        epistleAndGospel: "<strong>Epistle &amp; Holy Gospel:</strong> The Second Reading offers a semi-continuous reading from the New Testament letters. The Holy Gospel is the summit of the Liturgy of the Word: all stand, face the Gospeller, and acclaim Christ speaking directly in the midst of his people."
      },
      greetings: {
        standard: "<strong>Standard Apostolic Greeting (BAS p. 185):</strong> Drawn from 2 Corinthians 13:14 ('The grace of our Lord Jesus Christ, and the love of God, and the fellowship of the Holy Spirit...'). The normative Trinitarian greeting for Ordinary Time, Advent, and Epiphany.",
        easter: "<strong>Paschal Greeting (BAS p. 185):</strong> 'Alleluia! Christ is risen / The Lord is risen indeed. Alleluia!' Used throughout the 50 days of Eastertide and at Funerals to proclaim Christ's victory over death.",
        lent: "<strong>Lenten Penitential Greeting (BAS p. 185):</strong> 'Bless the Lord who forgives all our sins / His mercy endures for ever.' Sets a tone of humility and reliance on God's steadfast mercy during Lent and Ash Wednesday.",
        epiphany: "<strong>Epiphany Greeting:</strong> 'I will make you as a light for the nations / That my salvation may reach to the end of the earth' (Isaiah 49:6). Highlights the manifestation of Christ to all peoples.",
        morning_office: "<strong>Morning Prayer Versicles (BAS p. 47):</strong> 'Lord, open our lips...' (Psalm 51:15 &amp; Psalm 70:1). The classic opening dialogue of the Morning Office.",
        evening_office: "<strong>Service of Light Greeting (BAS p. 62):</strong> 'Jesus Christ is the light of the world / A light no darkness can extinguish.' Used at the lighting of the evening taper in Evening Prayer."
      },
      canticles: {
        gloria: "<strong>Gloria in Excelsis (BAS p. 186):</strong> The ancient 'Greater Doxology' expanding the angels' song at Bethlehem (Luke 2:14). Sung or said on Sundays and feasts outside Advent and Lent. (Check 'Collect for Purity' above to include Cranmer's classic 10th-century preparatory prayer).",
        kyrie: "<strong>Kyrie Eleison (BAS p. 186):</strong> A threefold cry for Christ's mercy ('Lord, have mercy / Christ, have mercy'). Traditionally replaces the Gloria during Advent and Lent, or on quieter ferial days.",
        trisagion: "<strong>Trisagion (BAS p. 187):</strong> The ancient Eastern hymn ('Holy God, holy and mighty, holy and immortal, have mercy on us'), echoing Isaiah's vision of the seraphim (Isaiah 6:3); especially fitting in Lent and Holy Week.",
        venite: "<strong>Venite • Psalm 95 (BAS p. 49):</strong> The traditional Daily Office invitatory psalm calling the assembly to joyful worship and attentive listening ('Oh, that today you would hearken to his voice!').",
        jubilate: "<strong>Jubilate • Psalm 100 (BAS p. 50):</strong> A joyful, festal alternative to the Venite in Morning Prayer or Services of the Word.",
        phos_hilaron: "<strong>Phos Hilaron • O Gracious Light (BAS p. 62):</strong> One of the oldest known Christian hymns outside the New Testament (described by St. Basil the Great in the 4th century as already ancient), sung at the lighting of the evening lamps."
      },
      acclamations: {
        alleluia: "<strong>Festal / Ordinary Gospel Acclamation:</strong> Acclaims the risen Christ present in the Gospel with 'Alleluia!' and a scripture verse (1 Samuel 3:9 &amp; John 6:68). Used in all seasons except Lent.",
        lenten: "<strong>Lenten Tract (No Alleluia):</strong> During Lent and Holy Week, the Church fasts from the word 'Alleluia' so it may ring out with renewed joy at Easter. Replaced by 'Praise to you, Lord Jesus Christ, King of endless glory!'",
        benedictus: "<strong>The Song of Zechariah • Benedictus (Luke 1:68-79, BAS p. 88):</strong> The Gospel Canticle of Morning Prayer, praising God for the 'dawn from on high' breaking upon those in darkness.",
        magnificat: "<strong>The Song of Mary • Magnificat (Luke 1:46-55, BAS p. 86):</strong> The Gospel Canticle of Evening Prayer, proclaiming God's mercy and the lifting up of the lowly."
      },
      creeds: {
        nicene: "<strong>The Nicene Creed (BAS p. 188):</strong> The ecumenical 'We believe' creed of the Councils of Nicaea (325) and Constantinople (381). Normative for Sundays and Principal Feasts at the Eucharist, expressing the shared faith of the universal Church across time and space.",
        apostles: "<strong>The Apostles' Creed (BAS p. 189):</strong> The ancient baptismal 'I believe' creed of the Western Church. Normative for Holy Baptism, Funerals, Morning and Evening Prayer, and permitted at the Eucharist (especially at family or lay-led services).",
        shema: "<strong>Hear, O Israel • The Shema (BAS p. 53):</strong> Drawn from Deuteronomy 6:4-5 and Jesus' summary of the Law in Mark 12:29-31. Introduced in the BAS as a scriptural affirmation of faith for the Daily Office and Services of the Word.",
        none: "<strong>Omit Creed:</strong> BAS rubrics permit omitting the Creed on weekdays or at ordinary pastoral services when a shorter Liturgy of the Word is desired."
      },
      prayers: {
        litany1: "<strong>Litany 1 • Litany of Peace (BAS p. 110):</strong> Modeled on the ancient Eastern Ektene (Deacon's Litany from the Liturgy of St. John Chrysostom) with the response 'Lord, have mercy.' Serene, universal, and fitting for any season of the year.",
        litany2: "<strong>Litany 2 (BAS p. 112):</strong> Uses the response 'Lord, hear our prayer' and emphasizes human solidarity, social justice, care for the fruits of the earth, and active compassion.",
        litany3: "<strong>Litany 3 (BAS p. 115):</strong> A participatory dialogue where the congregation completes the second half of each sentence initiated by the leader ('Father, we pray for your holy catholic Church / That we all may be one').",
        litany4: "<strong>Litany 4 (BAS p. 116):</strong> Focuses on creation care ('the good earth which God has given us'), peace, and liberation for the poor, unemployed, and captives.",
        litany14: "<strong>Litany 14 • Litany of Thanksgiving (BAS p. 127):</strong> Casts the Prayers of the People entirely in the form of thanksgiving ('We thank you, Lord') for creation, human grace, and the communion of saints.",
        pastoral: "<strong>Parish Pastoral Intercessions:</strong> A local parish form incorporating prayers for Indigenous reconciliation, the Diocese and Bishop, clergy and Lay Pastoral Assistants, local schools/universities, and named intentions."
      },
      eucharisticPrayers: {
        prayer1: "<strong>Eucharistic Prayer 1 (BAS p. 193):</strong> A comprehensive salvation-history prayer adapted from the West Syrian (Antiochene) tradition. It accommodates variable <strong>Proper Prefaces</strong> for seasons and feasts, making it the primary choice for major feasts and Sundays throughout the year.",
        prayer2: "<strong>Eucharistic Prayer 2 (BAS p. 196):</strong> Adapted from the 3rd-century <em>Apostolic Tradition</em> attributed to Hippolytus of Rome (c. 215 AD)—the oldest extant text of a Christian eucharistic prayer. Concise and classic with a fixed preface; ideal for Ordinary Time and weekday celebrations.",
        prayer3: "<strong>Eucharistic Prayer 3 (BAS p. 198):</strong> A concise eucharistic prayer that also takes a variable <strong>Proper Preface</strong>. Especially well suited for Saints' Days, Weddings, Funerals, Ordinations, or Sundays when a seasonal preface is desired in a shorter form than Prayer 1.",
        prayer4: "<strong>Eucharistic Prayer 4 (BAS p. 201):</strong> Celebrates cosmic creation ('the vast expanse of interstellar space, galaxies, suns, the planets in their courses, and this fragile earth, our island home'), human vocation, and Christ's new creation. Fixed preface.",
        prayer5: "<strong>Eucharistic Prayer 5 (BAS p. 204):</strong> Written in warm, direct language highlighting Jesus' friendship with children, outcasts, and the poor. Designed for all-age, family, or intergenerational Eucharists. Fixed preface.",
        prayer6: "<strong>Eucharistic Prayer 6 (BAS p. 207):</strong> Rooted in the Alexandrian (St. Basil) and ecumenical Lima Liturgy traditions. Richly scriptural and solemn; suited for principal feasts and major celebrations. Fixed preface."
      },
      prefaces: {
        auto: "<strong>Auto-Match Occasion / Season:</strong> Automatically selects the appointed BAS Proper Preface (pp. 218–226) matching your chosen Sunday, Feast, or Special Service (used in Eucharistic Prayers 1 and 3).",
        lords_day: "<strong>Of the Lord's Day (BAS p. 218):</strong> Celebrates Sunday as the day of creation and resurrection ('source of light and life'). Used on Sundays in Ordinary Time.",
        advent: "<strong>Advent (BAS p. 219):</strong> Gives thanks for Christ's first coming in humility and prepares the Church to rejoice at his coming again in glory.",
        incarnation: "<strong>Christmas / The Incarnation (BAS p. 219):</strong> Celebrates the Word made flesh of the Virgin Mary to make us clean from all sin.",
        epiphany: "<strong>Epiphany (BAS p. 220):</strong> Rejoices in the new light shining in our hearts to give knowledge of God's glory in the face of Christ.",
        lent: "<strong>Lent &amp; Penitential (BAS p. 220):</strong> Calls the faithful to cleanse their hearts and prepare with joy for the paschal feast through prayer and works of mercy.",
        easter: "<strong>Eastertide (BAS p. 222):</strong> Acclaims Christ as the true Paschal Lamb who by his death has destroyed death and by his rising won everlasting life.",
        pentecost: "<strong>Pentecost / Holy Spirit (BAS p. 223):</strong> Celebrates the outpouring of the Spirit bringing the Church into being and leading it into all truth.",
        trinity: "<strong>Trinity Sunday (BAS p. 224):</strong> Confesses the one and equal glory of Father, Son, and Holy Spirit in Trinity of Persons and Unity of Being.",
        allsaints: "<strong>All Saints &amp; Commemorations (BAS p. 225):</strong> Rejoices in the great cloud of witnesses surrounding the Church in fellowship.",
        baptism: "<strong>Holy Baptism &amp; Initiation (BAS p. 225):</strong> Gives thanks for adoption as God's sons and daughters and citizenship in the kingdom through water and the Spirit.",
        marriage: "<strong>Holy Matrimony / Marriage (BAS p. 225):</strong> Celebrates covenanted love as an image of the heavenly Jerusalem and Christ's love for his Church.",
        commemoration_dead: "<strong>Commemoration of the Dead / Funeral (BAS p. 226):</strong> Proclaims the classic Christian hope: 'For to your faithful people, O Lord, life is changed, not ended.'",
        apostles_ordination: "<strong>Apostles &amp; Ordinations (BAS p. 224):</strong> Gives thanks for Christ the great Shepherd who sends apostles and ministers to teach and shepherd his flock."
      },
      lordsPrayer: {
        contemporary: "<strong>Contemporary Text (BAS p. 211):</strong> The ecumenical 1975 International Consultation on English Texts (ICET) translation ('Our Father in heaven... Save us from the time of trial'), shared with Lutheran, Roman Catholic, and Reformed churches.",
        traditional: "<strong>Traditional Text (BAS p. 211):</strong> The beloved 16th-century Cranmerian translation ('Our Father, who art in heaven... forgive us our trespasses'), deeply familiar for pastoral visits, funerals, and traditional worship."
      },
      fractions: {
        fraction1: "<strong>Fraction 1 • Standard (BAS p. 212):</strong> Drawn from 1 Corinthians 10:16-17 ('We break this bread to share in the body of Christ / We, being many, are one body'). The standard Sunday fraction in Ordinary Time.",
        fraction2: "<strong>Fraction 2 • Creation &amp; Harvest (BAS p. 212):</strong> Echoes the 1st-century <em>Didache</em> ('golden fields of wheat, whose many grains we have gathered and made into this one bread'). Ideal for Thanksgiving, Harvest, and Season of Creation.",
        fraction3: "<strong>Fraction 3 • Advent &amp; Banquet (BAS p. 212):</strong> Points to the messianic banquet of Revelation 19:9 ('Happy are those who are called to the supper of the Lamb'). Appointed for Advent and Epiphany.",
        fraction5: "<strong>Fraction 5 • Lent &amp; Passiontide (BAS p. 212):</strong> Connects the broken bread with Christ's cross and John 12:24 ('Let your Church be the wheat which bears its fruit in dying'). Appointed for Lent and Holy Week.",
        fraction6: "<strong>Fraction 6 • Easter, Baptism &amp; Funerals (BAS p. 213):</strong> Proclaims baptismal dying and rising with Christ (Romans 6:8, 'Lord, we died with you on the cross / Now we are raised to new life'). Appointed for Eastertide, Baptisms, and Funerals."
      },
      sectionCommentaries: {
        "The Gathering of the Community": "The Gathering draws dispersed individuals into one worshipping body (the ekklesia) through greeting, praise, and the Collect of the Day, which gathers the community's prayer into a single focus.",
        "The Approach": "In the Daily Office, the Approach prepares the heart and lips for praise through penitence and the Invitatory Psalm.",
        "The Service of Light": "Derived from the ancient Christian Lucernarium at dusk, giving thanks for Jesus Christ as the true Light who overcomes the darkness of the world.",
        "The Proclamation of the Word": "In the Proclamation of the Word, God speaks to the assembly through Hebrew Scripture, Psalmody, Apostolic witness, and the Gospel—the living voice of Christ—followed by the homily, creed, and intercessions.",
        "The Response to the Word": "Having heard God's Word, the community responds by confessing the faith, interceding for the world, seeking reconciliation, and exchanging Christ's Peace.",
        "Presentation and Examination of the Candidates": "Candidates for Baptism (or their parents and sponsors) publicly renounce evil and turn to Christ, supported by the pledge of the whole congregation.",
        "The Baptismal Covenant": "The heart of Anglican baptismal theology: the Apostles' Creed professed in question-and-answer form, followed by six lifelong commitments of discipleship, justice, peace, and care for creation.",
        "The Baptism": "Water is blessed in a great prayer of thanksgiving recalling God's saving acts through water, followed by triple immersion or pouring in the Triune Name, anointing with chrism, and the giving of the light of Christ.",
        "The Confirmation, Reception & Reaffirmation": "Candidates renew the Baptismal Covenant before the Bishop, who prays for the sevenfold Spirit and lays hands upon each person to strengthen them for adult Christian witness.",
        "The Marriage": "The couple publicly declare their free intent, exchange lifelong vows, and give and receive rings as outward signs of an inward covenant of fidelity and love.",
        "The Blessing of the Marriage": "The Church intercedes for the couple and pronounces the solemn Nuptial Blessing, asking that their life together reflect Christ's love for his Church.",
        "The Celebration of the Eucharist": "Patterned on Christ's fourfold action at the Last Supper: he took bread and wine (Offertory), gave thanks (The Great Thanksgiving), broke the bread (Fraction), and gave it to his disciples (Communion).",
        "The Commendation and Committal": "At the conclusion of the Funeral Liturgy, the community entrusts the departed into the merciful hands of God with the ancient Kontakion ('Give rest, O Christ') and commits the body to its resting place in sure hope of the resurrection.",
        "The Presentation": "At an Ordination, clerical and lay representatives present the candidate to the Bishop, and the congregation acclaims their assent ('It is / We will').",
        "The Examination": "The Bishop examines the ordinand before the people concerning their call, fidelity to Scripture, prayer life, and servant leadership.",
        "The Consecration": "After the Litany for Ordinations and Veni Creator Spiritus, the Bishop (with priests at a presbyteral ordination) lays hands silently upon the candidate and prays the Consecratory Prayer invoking the Holy Spirit.",
        "The Sending Forth of the Community": "Nourished by Word and Sacrament, the assembly gives thanks, receives the blessing, and is sent out by the deacon or leader ('Go forth in the name of Christ') into the world to love and serve.",
        "The Sending Forth": "The community is blessed and sent forth to live out its baptismal vocation in daily life."
      }
    };
