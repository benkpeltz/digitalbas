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
                text: "The Lord answered Job out of the whirlwind: 'Who is this that darkens counsel by words without knowledge? Gird up your loins like a man, I will question you, and you shall declare to me. Where were you when I laid the foundation of the earth? Tell me, if you have understanding. Who determined its measurements—surely you know! Or who stretched the line upon it? On what were its bases sunk, or who laid its cornerstone when the morning stars sang together and all the heavenly beings shouted for joy?'"
              },
              {
                label: "Track 2: Isaiah 53:4-12 (Suffering Servant)",
                citation: "Isaiah 53:4-12",
                text: "Surely he has borne our infirmities and carried our diseases; yet we accounted him stricken, struck down by God, and afflicted. But he was wounded for our transgressions, crushed for our iniquities; upon him was the punishment that made us whole, and by his bruises we are healed. All we like sheep have gone astray; we have all turned to our own way, and the Lord has laid on him the iniquity of us all."
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
            text: "Every high priest chosen from among mortals is put in charge of things pertaining to God on their behalf, to offer gifts and sacrifices for sins. He is able to deal gently with the ignorant and wayward, since he himself is subject to weakness; and because of this he must offer sacrifice for his own sins as well as for those of the people. And one does not presume to take this honour, but takes it only when called by God, just as Aaron was. So also Christ did not glorify himself in becoming a high priest, but was appointed by the one who said to him, 'You are my Son, today I have begotten you.'"
          },
          gospel: {
            citation: "Mark 10:35-45",
            text: "James and John, the sons of Zebedee, came forward to Jesus and said to him, 'Teacher, we want you to do for us whatever we ask of you.' And he said to them, 'What is it you want me to do for you?' And they said to him, 'Grant us to sit, one at your right hand and one at your left, in your glory.' But Jesus said to them, 'You do not know what you are asking. Are you able to drink the cup that I drink, or be baptized with the baptism that I am baptized with?' They replied, 'We are able.' ... So Jesus called them and said to them, 'Whoever wishes to become great among you must be your servant, and whoever wishes to be first among you must be slave of all. For the Son of Man came not to be served but to serve, and to give his life a ransom for many.'"
          }
        }
      },
      allsaints: {
        name: "All Saints' Day (November 1)",
        season: "Feast of All Saints (White/Gold)",
        prefaceKey: "allsaints",
        colorBadge: "bg-amber-100 text-amber-900 border-amber-300",
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
                text: "The souls of the righteous are in the hand of God, and no torment will ever touch them. In the eyes of the foolish they seemed to have died, and their departure was thought to be a disaster, and their going from us to be their destruction; but they are at peace. For though in the sight of others they were punished, their hope is full of immortality."
              },
              {
                label: "Alternate: Isaiah 25:6-9",
                citation: "Isaiah 25:6-9",
                text: "On this mountain the Lord of hosts will make for all peoples a feast of rich food, a feast of well-aged wines, of rich food filled with marrow, of well-aged wines strained clear. And he will destroy on this mountain the shroud that is cast over all peoples, the sheet that is spread over all nations; he will swallow up death forever. Then the Lord God will wipe away the tears from all faces."
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
            text: "I saw a new heaven and a new earth; for the first heaven and the first earth had passed away, and the sea was no more. And I saw the holy city, the new Jerusalem, coming down out of heaven from God, prepared as a bride adorned for her husband. And I heard a loud voice from the throne saying, 'See, the home of God is among mortals. He will dwell with them; they will be his peoples, and God himself will be with them; he will wipe every tear from their eyes.'"
          },
          gospel: {
            citation: "John 11:32-44",
            text: "When Mary came where Jesus was and saw him, she knelt at his feet and said to him, 'Lord, if you had been here, my brother would not have died.' When Jesus saw her weeping, and the Jews who came with her also weeping, he was greatly disturbed in spirit and deeply moved. He said, 'Where have you laid him?' They said to him, 'Lord, come and see.' Jesus began to weep... He cried with a loud voice, 'Lazarus, come out!' The dead man came out, his hands and feet bound with strips of cloth, and his face wrapped in a cloth. Jesus said to them, 'Unbind him, and let him go.'"
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
                text: "The days are surely coming, says the Lord, when I will fulfil the promise I made to the house of Israel and the house of Judah. In those days and at that time I will cause a righteous Branch to spring up for David; and he shall execute justice and righteousness in the land. In those days Judah will be saved and Jerusalem will live in safety. And this is the name by which it will be called: 'The Lord is our righteousness.'"
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
            text: "How can we thank God enough for you in return for all the joy that we feel before our God because of you? Night and day we pray most earnestly that we may see you face to face and restore whatever is lacking in your faith. Now may our God and Father himself and our Lord Jesus direct our way to you. And may the Lord make you increase and abound in love for one another and for all."
          },
          gospel: {
            citation: "Luke 21:25-36",
            text: "Jesus said, 'There will be signs in the sun, the moon, and the stars, and on the earth distress among nations confused by the roaring of the sea and the waves. People will faint from fear and foreboding of what is coming upon the world, for the powers of the heavens will be shaken. Then they will see the Son of Man coming in a cloud with power and great glory. Now when these things begin to take place, stand up and raise your heads, because your redemption is drawing near.'"
          }
        }
      },
      christmas: {
        name: "Christmas Day (Nativity of our Lord)",
        season: "Christmas (White/Gold)",
        prefaceKey: "incarnation",
        colorBadge: "bg-amber-100 text-amber-900 border-amber-300",
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
                text: "The people who walked in darkness have seen a great light; those who lived in a land of deep darkness—on them light has shined. You have multiplied the nation, you have increased its joy... For a child has been born for us, a son given to us; authority rests upon his shoulders; and he is named Wonderful Counsellor, Mighty God, Everlasting Father, Prince of Peace."
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
            text: "For the grace of God has appeared, bringing salvation to all, training us to renounce impiety and worldly passions, and in the present age to live lives that are self-controlled, upright, and godly, while we wait for the blessed hope and the manifestation of the glory of our great God and Saviour, Jesus Christ."
          },
          gospel: {
            citation: "Luke 2:1-14 (15-20)",
            text: "In those days a decree went out from Emperor Augustus that all the world should be registered... And she gave birth to her firstborn son and wrapped him in bands of cloth, and laid him in a manger, because there was no place for them in the inn. In that region there were shepherds living in the fields, keeping watch over their flock by night. Then an angel of the Lord stood before them... 'Do not be afraid; for see—I am bringing you good news of great joy for all the people: to you is born this day in the city of David a Saviour, who is the Messiah, the Lord.'"
          }
        }
      },
      epiphany: {
        name: "The Epiphany of the Lord (January 6)",
        season: "Epiphany (White/Gold)",
        prefaceKey: "epiphany",
        colorBadge: "bg-amber-100 text-amber-900 border-amber-300",
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
                text: "Arise, shine; for your light has come, and the glory of the Lord has risen upon you. For darkness shall cover the earth, and thick darkness the peoples; but the Lord will arise upon you, and his glory will appear over you. Nations shall come to your light, and kings to the brightness of your dawn."
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
            text: "This is the reason that I Paul am a prisoner for Christ Jesus for the sake of you Gentiles... The mystery is that the Gentiles have become fellow-heirs, members of the same body, and sharers in the promise in Christ Jesus through the gospel."
          },
          gospel: {
            citation: "Matthew 2:1-12",
            text: "In the time of King Herod, after Jesus was born in Bethlehem of Judea, wise men from the East came to Jerusalem, asking, 'Where is the child who has been born king of the Jews? For we observed his star at its rising, and have come to pay him homage.' ... On entering the house, they saw the child with Mary his mother; and they knelt down and paid him homage. Then, opening their treasure-chests, they offered him gifts of gold, frankincense, and myrrh."
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
                text: "Yet even now, says the Lord, return to me with all your heart, with fasting, with weeping, and with mourning; rend your hearts and not your clothing. Return to the Lord, your God, for he is gracious and merciful, slow to anger, and abounding in steadfast love, and relents from punishing."
              },
              {
                label: "Alternate: Isaiah 58:1-12 (True Fasting)",
                citation: "Isaiah 58:1-12",
                text: "Is not this the fast that I choose: to loose the bonds of injustice, to undo the thongs of the yoke, to let the oppressed go free, and to break every yoke? Is it not to share your bread with the hungry, and bring the homeless poor into your house; when you see the naked, to cover them, and not to hide yourself from your own kin?"
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
            text: "We entreat you on behalf of Christ, be reconciled to God. For our sake he made him to be sin who knew no sin, so that in him we might become the righteousness of God. As we work together with him, we urge you also not to accept the grace of God in vain. See, now is the acceptable time; see, now is the day of salvation!"
          },
          gospel: {
            citation: "Matthew 6:1-6, 16-21",
            text: "Jesus said, 'Beware of practising your piety before others in order to be seen by them; for then you have no reward from your Father in heaven... Do not store up for yourselves treasures on earth, where moth and rust consume and where thieves break in and steal; but store up for yourselves treasures in heaven, where neither moth nor rust consumes and where thieves do not break in and steal. For where your treasure is, there your heart will be also.'"
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
                text: "See, my servant shall prosper; he shall be exalted and lifted up, and shall be very high... He was despised and rejected by others; a man of suffering and acquainted with infirmity; and as one from whom others hide their faces he was despised, and we held him of no account. Surely he has borne our infirmities and carried our diseases... upon him was the punishment that made us whole, and by his bruises we are healed."
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
            text: "Therefore, my friends, since we have confidence to enter the sanctuary by the blood of Jesus, by the new and living way that he opened for us through the curtain (that is, through his flesh), and since we have a great priest over the house of God, let us approach with a true heart in full assurance of faith."
          },
          gospel: {
            citation: "John 18:1–19:42 (The Passion of our Lord)",
            text: "So they took Jesus; and carrying the cross by himself, he went out to what is called The Place of the Skull, which in Hebrew is called Golgotha. There they crucified him, and with him two others, one on either side, with Jesus between them... When Jesus had received the wine, he said, 'It is finished.' Then he bowed his head and gave up his spirit."
          }
        }
      },
      easter: {
        name: "Easter Day (The Resurrection of our Lord)",
        season: "Eastertide (White/Gold)",
        prefaceKey: "easter",
        colorBadge: "bg-amber-100 text-amber-900 border-amber-300",
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
                text: "Peter began to speak to them: 'I truly understand that God shows no partiality, but in every nation anyone who fears him and does what is right is acceptable to him. You know the message he sent to the people of Israel, preaching peace by Jesus Christ—he is Lord of all... They put him to death by hanging him on a tree; but God raised him on the third day and allowed him to appear...'"
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
            text: "If for this life only we have hoped in Christ, we are of all people most to be pitied. But in fact Christ has been raised from the dead, the first fruits of those who have died. For since death came through a human being, the resurrection of the dead has also come through a human being; for as all die in Adam, so all will be made alive in Christ."
          },
          gospel: {
            citation: "John 20:1-18",
            text: "Early on the first day of the week, while it was still dark, Mary Magdalene came to the tomb and saw that the stone had been removed from the tomb... Jesus said to her, 'Mary!' She turned and said to him in Hebrew, 'Rabbouni!' (which means Teacher)... Mary Magdalene went and announced to the disciples, 'I have seen the Lord'; and she told them that he had said these things to her."
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
                text: "When the day of Pentecost had come, they were all together in one place. And suddenly from heaven there came a sound like the rush of a violent wind, and it filled the entire house where they were sitting. Divided tongues, as of fire, appeared among them, and a tongue rested on each of them. All of them were filled with the Holy Spirit and began to speak in other languages, as the Spirit gave them ability."
              },
              {
                label: "Alternate: Ezekiel 37:1-14 (Valley of Dry Bones)",
                citation: "Ezekiel 37:1-14",
                text: "The hand of the Lord came upon me, and he brought me out by the spirit of the Lord and set me down in the middle of a valley; it was full of bones... He said to me, 'Mortal, can these bones live?' I answered, 'O Lord God, you know.' Then he said to me, 'Prophesy to these bones, and say to them: O dry bones, hear the word of the Lord... I will cause breath to enter you, and you shall live.'"
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
            text: "We know that the whole creation has been groaning in labor pains until now; and not only the creation, but we ourselves, who have the first fruits of the Spirit, groan inwardly while we wait for adoption, the redemption of our bodies... Likewise the Spirit helps us in our weakness; for we do not know how to pray as we ought, but that very Spirit intercedes with sighs too deep for words."
          },
          gospel: {
            citation: "John 15:26-27; 16:4b-15",
            text: "Jesus said, 'When the Advocate comes, whom I will send to you from the Father, the Spirit of truth who comes from the Father, he will testify on my behalf. You also are to testify, because you have been with me from the beginning... When the Spirit of truth comes, he will guide you into all the truth.'"
          }
        }
      },
      trinity: {
        name: "Trinity Sunday (First Sunday after Pentecost)",
        season: "Trinity Sunday (White/Gold)",
        prefaceKey: "trinity",
        colorBadge: "bg-amber-100 text-amber-900 border-amber-300",
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
                text: "In the year that King Uzziah died, I saw the Lord sitting on a throne, high and lofty; and the hem of his robe filled the temple. Seraphs were in attendance above him... And one called to another and said: 'Holy, holy, holy is the Lord of hosts; the whole earth is full of his glory.' ... Then I heard the voice of the Lord saying, 'Whom shall I send, and who will go for us?' And I said, 'Here am I; send me!'"
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
            text: "For all who are led by the Spirit of God are children of God. For you did not receive a spirit of slavery to fall back into fear, but you have received a spirit of adoption. When we cry, 'Abba! Father!' it is that very Spirit bearing witness with our spirit that we are children of God, and if children, then heirs, heirs of God and joint heirs with Christ."
          },
          gospel: {
            citation: "John 3:1-17",
            text: "Jesus answered Nicodemus, 'Very truly, I tell you, no one can see the kingdom of God without being born from above.' ... 'For God so loved the world that he gave his only Son, so that everyone who believes in him may not perish but may have eternal life. Indeed, God did not send the Son into the world to condemn the world, but in order that the world might be saved through him.'"
          }
        }
      },
      reign_of_christ: {
        name: "The Reign of Christ (Last Sunday after Pentecost)",
        season: "Reign of Christ (White/Gold)",
        prefaceKey: "lords_day",
        colorBadge: "bg-amber-100 text-amber-900 border-amber-300",
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
                text: "As I watched, thrones were set in place, and an Ancient One took his throne... I saw one like a human being coming with the clouds of heaven. And he came to the Ancient One and was presented before him. To him was given dominion and glory and kingship, that all peoples, nations, and languages should serve him. His dominion is an everlasting dominion that shall not pass away."
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
            text: "Grace to you and peace from him who is and who was and who is to come, and from the seven spirits who are before his throne, and from Jesus Christ, the faithful witness, the firstborn of the dead, and the ruler of the kings of the earth. To him who loves us and freed us from our sins by his blood, and made us to be a kingdom, priests serving his God and Father, to him be glory and dominion forever and ever. Amen."
          },
          gospel: {
            citation: "John 18:33-37",
            text: "Pilate asked Jesus, 'Are you the King of the Jews?' ... Jesus answered, 'My kingdom is not from this world. If my kingdom were from this world, my followers would be fighting to keep me from being handed over to the Jews. But as it is, my kingdom is not from here.' Pilate asked him, 'So you are a king?' Jesus answered, 'You say that I am a king. For this I was born, and for this I came into the world, to testify to the truth. Everyone who belongs to the truth listens to my voice.'"
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
                text: "Have you not known? Have you not heard? The Lord is the everlasting God, the Creator of the ends of the earth. He does not faint or grow weary; his understanding is unsearchable. He gives power to the faint, and strengthens the powerless. Even youths will faint and be weary, and the young will fall exhausted; but those who wait for the Lord shall renew their strength, they shall mount up with wings like eagles, they shall run and not be weary, they shall walk and not faint."
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
            text: "Are any among you suffering? They should pray. Are any cheerful? They should sing songs of praise. Are any among you sick? They should call for the elders of the church and have them pray over them, anointing them with oil in the name of the Lord. The prayer of faith will save the sick, and the Lord will raise them up; and anyone who has committed sins will be forgiven."
          },
          gospel: {
            citation: "Matthew 11:28-30",
            text: "Jesus said, 'Come to me, all you that are weary and are carrying heavy burdens, and I will give you rest. Take my yoke upon you, and learn from me; for I am gentle and humble in heart, and you will find rest for your souls. For my yoke is easy, and my burden is light.'"
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
                text: "Insert scripture reading text here or click 'Edit text' to customize."
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
            text: "Insert Epistle or New Testament lesson text here."
          },
          gospel: {
            citation: "The Holy Gospel",
            text: "Insert Holy Gospel passage text here."
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
      allsaints: "For in the multitude of your saints you have surrounded us with so great a cloud of witnesses, that we, rejoicing in their fellowship, may run with patience the race that is set before us, and together with them may receive the crown of glory that never fades away."
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
        body: "Celebrant: Will you continue in the apostles' teaching and fellowship, in the breaking of bread, and in the prayers?\nPeople: I will, with God's help.\nCelebrant: Will you persevere in resisting evil and, whenever you fall into sin, repent and return to the Lord?\nPeople: I will, with God's help.\nCelebrant: Will you proclaim by word and example the good news of God in Christ?\nPeople: I will, with God's help.\nCelebrant: Will you seek and serve Christ in all persons, loving your neighbour as yourself?\nPeople: I will, with God's help.\nCelebrant: Will you strive for justice and peace among all people, and respect the dignity of every human being?\nPeople: I will, with God's help.",
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
      ]
    };
