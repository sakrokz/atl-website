

const moreBtn = document.getElementById('more-btn')
const searchBar = document.querySelector('.search')
const closeBtn = document.getElementById('close-btn')
const randomBtn = document.getElementById('random-btn')
const yearInp = document.getElementById('year-elm')
const searchBtn = document.getElementById('search-btn')
const hero = document.querySelector('.hero')
const head = document.getElementById('head')
const expl = document.getElementById('exp')

moreBtn.addEventListener('click', () => {
    searchBar.style.transform = "translateY(0)"
})

closeBtn.addEventListener('click', () => {
    searchBar.style.transform = "translateY(150%)"
})

randomBtn.addEventListener('click', () => {

    let randSelect = Math.floor(Math.random() * 2)
    let timePeriods = ['AD', 'BC']
    let timePeriod = timePeriods[randSelect]

    let randNum = Math.round(Math.floor(Math.random() * 2000 / 100) * 100)
    yearInp.value = `${timePeriod} ` + randNum

    if(timePeriod === 'BC' && randNum > 1000){
       yearInp.value = `${timePeriod} ` + Math.round(Math.floor(Math.random() * 1000 / 100) * 100)
    }
})

searchBtn.addEventListener('click', () => {

    let MainInput = yearInp.value

    if(MainInput === '' ){
        alert('Please enter a valid year')
    } else{
        timeP = MainInput.slice(0,2)
        yearP = MainInput.slice(3)

        searchBar.style.transform = "translateY(150%)"

        if(timeP === 'BC'){
            if(yearP === '1000'){
                hero.style.backgroundImage = "url('assets/images/bc/1000.jpeg')"
                head.textContent = "King David and the Founding of Israel"
                expl.textContent = "In a pivotal chapter of biblical history, King David emerges as the shepherd who transforms into the legendary leader of Israel. After vanquishing Goliath, David's journey unfolds as he rises to become the anointed king of Judah and later unifies the Twelve Tribes under a single banner. David's conquest of Jerusalem, establishment of the capital, and construction of the First Temple signify the birth of a united Israel, marking his reign as a transformative era in the biblical narrative. His legacy endures through Psalms, military victories, and the unification of a nation under the guidance of a revered biblical figure."
            }
            else if(yearP === '900'){
                hero.style.backgroundImage = "url('assets/images/bc/900.jpeg')"
                head.textContent = "The First Temple in Jerusalem"
                expl.textContent = "The First Temple in Jerusalem, also known as Solomon's Temple, stands as a remarkable testament to the grandeur of ancient Israelite architecture and religious devotion. Constructed during the reign of King Solomon in the 10th century BCE, this sacred edifice served as the central place of worship for the Israelites. The temple, meticulously designed and adorned with precious materials like cedar wood and gold, housed the Ark of the Covenant and became the focal point of religious ceremonies and rituals. Its significance extends beyond architectural splendor; the First Temple symbolized the culmination of King David's dream to establish a permanent dwelling place for the divine presence. Unfortunately, the temple met a tragic fate when it was destroyed by the Babylonians in 586 BCE. Despite its physical absence, the First Temple remains a pivotal symbol of ancient Israelite spirituality, shaping the religious identity of subsequent generations."
            }
            else if(yearP === '800'){
                hero.style.backgroundImage = "url('assets/images/bc/800.jpeg')"
                head.textContent = "The Birth of the Ancient Olympics"
                expl.textContent = "The first-ever Olympics, held in ancient Olympia, Greece, marked a historic convergence of athletic prowess, cultural celebration, and competitive spirit. Originating in 776 BCE, this sacred event gathered Greek city-states in a celebration dedicated to Zeus, the king of the gods. Athletes from various regions showcased their physical prowess in events like running, wrestling, and chariot races, embodying the ideals of excellence, honor, and harmony."
            }
            else if(yearP === '700'){
                hero.style.backgroundImage = "url('assets/images/bc/700.jpeg')"
                head.textContent = "Messenian War: Struggle for Freedom in Ancient Greece"
                expl.textContent = "The Messenian War, a series of conflicts that unfolded in ancient Greece during the 8th and 7th centuries BCE, is a testament to the complex power dynamics and societal structures of the time. The war primarily revolved around the region of Messenia, where the Messenians sought liberation from Spartan rule. The conflict is traditionally divided into two phases: the First Messenian War (c. 743-724 BCE) and the Second Messenian War (c. 650-620 BCE). The Messenians, largely an agrarian society, faced the formidable military might of the Spartans, renowned for their disciplined warrior class. The wars resulted in the subjugation of the Messenians, who were reduced to helots, a state of semi-serfdom."
            }
            else if(yearP === '600'){
                hero.style.backgroundImage = "url('assets/images/bc/600.jpeg')"
                head.textContent = "The Enlightenment of Buddha"
                expl.textContent = "The Enlightenment of Buddha, also known as Bodhi or Nirvana, is a pivotal moment in the life of Siddhartha Gautama, the founder of Buddhism. This transformative event occurred around 2,500 years ago in Bodh Gaya, India, under the Bodhi tree. Siddhartha, having renounced a life of luxury to seek answers to the nature of human suffering, engaged in profound meditation."
            }
            else if(yearP === '500'){
                hero.style.backgroundImage = "url('assets/images/bc/500.jpeg')"
                head.textContent = "Triumph at Salamis: Turning the Tide of the Greco-Persian Wars"
                expl.textContent = "In 480 BCE, the Battle of Salamis unfolded as a pivotal naval clash between the Greek city-states and the Persian Empire during the Greco-Persian Wars. Strategically orchestrated by Themistocles, the Greek fleet utilized the narrow waters around Salamis to outmaneuver the larger Persian navy, achieving a remarkable victory despite being outnumbered. This triumph not only shattered Persian naval dominance but also proved instrumental in altering the course of the entire conflict, setting the stage for subsequent victories that ultimately secured Greek independence. The Battle of Salamis stands as a testament to strategic brilliance, naval prowess, and the resilience of the Greek alliance against the formidable Persian Empire."
            }
            else if(yearP === '400'){
                hero.style.backgroundImage = "url('assets/images/bc/400.jpeg')"
                head.textContent = "Peloponnesian War: A Struggle for Greek Supremacy"
                expl.textContent = "The Peloponnesian War (431-404 BCE) unfolded as a complex and protracted conflict between Athens, leading the Delian League, and Sparta, heading the Peloponnesian League. Rooted in deep-seated rivalries, the war was characterized by three distinct phases: the Archidamian War, the Sicilian Expedition, and the Ionian or Decelean War."
            }
            else if(yearP === '300'){
                hero.style.backgroundImage = "url('assets/images/bc/300.jpeg')"
                head.textContent = "Alexander the Great: Conqueror of Empires"
                expl.textContent = "lexander the Great, ascending to the Macedonian throne in 336 BCE, left an indelible mark on history through his unparalleled military prowess and visionary conquests. With an empire stretching from Greece to Egypt, Persia, and the Indian subcontinent, Alexander's conquests not only redrew the map of the ancient world but also facilitated a profound exchange of cultures, ideas, and knowledge. His legacy as a conqueror and unifier endured long after his death in 323 BCE, shaping the course of Hellenistic civilization and inspiring generations of leaders to come."
            }
            else if(yearP === '200'){
                hero.style.backgroundImage = "url('assets/images/bc/200.jpeg')"
                head.textContent = "Punic Wars: Clash of Titans in the Ancient Mediterranean"
                expl.textContent = "The Punic Wars, fought between Rome and Carthage in the 3rd and 2nd centuries BCE, stand as a monumental series of conflicts that shaped the course of Western history. The First Punic War (264-241 BCE) witnessed intense naval battles and Rome's acquisition of Sicily, while the Second Punic War (218-201 BCE) unfolded as Hannibal Barca's audacious march across the Alps and Rome's eventual triumph. The Third Punic War (149-146 BCE) culminated in the destruction of Carthage. These wars left an enduring impact on the Roman Republic, solidifying its dominance in the Mediterranean and marking the rise of Rome as a formidable imperial power."
            }
            else if(yearP === '100'){
                hero.style.backgroundImage = "url('assets/images/bc/100.jpeg')"
                head.textContent = "Julius Caesar: Architect of Roman Transformation"
                expl.textContent = "Julius Caesar, born in 100 BCE, was a military genius, statesman, and key figure in the demise of the Roman Republic. Rising through the political ranks, Caesar's military conquests in Gaul solidified his power and popularity. Crossing the Rubicon in 49 BCE, he ignited a civil war against Pompey, leading to his eventual rise as dictator. Caesar's political and social reforms aimed at alleviating Rome's socio-economic issues, but his unprecedented power stirred fears among the Senate. His assassination in 44 BCE marked a turning point, triggering further conflicts and the eventual rise of the Roman Empire under Augustus. Caesar's legacy, a mix of military prowess and political ambition, shaped the course of Roman history, leaving an enduring impact on the transition from republic to empire."
            }
        }
        else if(timeP === 'AD'){
            if(yearP === '0'){
            hero.style.backgroundImage = "url('assets/images/ad/0.jpg')"
            head.textContent = "Augustus and the Birth of the Roman Empire"
            expl.textContent = "The formation of the Roman Empire under Augustus marked a transformative chapter in ancient history. Following his victory at the Battle of Actium in 31 BCE, Augustus skillfully navigated political complexities, presenting himself as a restorer of the Roman Republic while consolidating unprecedented power. Under his rule, from 27 BCE to 14 CE, Augustus implemented crucial administrative reforms, solidified his authority, and ushered in an era of relative peace known as the Pax Romana. This period laid the groundwork for the Roman Empire, shaping the trajectory of Western civilization for centuries to come."
            }
            else if(yearP === '100'){
                hero.style.backgroundImage = "url('assets/images/ad/100.jpg')"
                head.textContent = "Roman Ingenuity: The Watermill's Revolution"
                expl.textContent = "The invention of the watermill in the Roman Empire stands as a testament to ancient engineering brilliance. The first documented use of water-powered mills dates back to the 1st century BCE, showcasing the Romans' innovative approach to harnessing natural resources. Watermills utilized flowing water to grind grain, significantly increasing efficiency in flour production and various industrial processes. This technological leap not only revolutionized milling but also laid the groundwork for future advancements in harnessing water and mechanical power, contributing to the economic and technological prosperity of the Roman Empire."
            }
            else if(yearP === '200'){
                hero.style.backgroundImage = "url('assets/images/ad/200.jpg')"
                head.textContent = "Zen Buddhism Flourishes: A Spiritual Migration in Ancient China"
                expl.textContent = "During the 3rd century AD(200-299 AD), Zen Buddhism began to take root and spread in China, marking a crucial period of cultural and spiritual exchange. Rooted in Chan Buddhism, which had originated in India, Zen emphasized direct experience and intuitive understanding of enlightenment. The arrival of influential figures like Bodhidharma played a key role in transmitting Zen teachings, introducing meditation practices, and influencing Chinese monastic life. The simplicity and immediacy of Zen appealed to a diverse audience, gaining popularity across various social strata. This early spread laid the foundation for the subsequent development of Zen Buddhism in China, fostering a unique fusion of Indian and Chinese philosophical traditions and leaving an enduring impact on Chinese spirituality."
            }
            else if(yearP === '300'){
                hero.style.backgroundImage = "url('assets/images/ad/300.jpg')"
                head.textContent = "Constantinople's Birth: Constantine the Great's Imperial Legacy"
                expl.textContent = "In the early 4th century AD, Roman Emperor Constantine the Great undertook a monumental initiative that would reshape the course of history—the founding of Constantinople. In 330 AD, Constantine officially inaugurated the city, strategically located at the crossroads of Europe and Asia, on the site of the ancient Greek city Byzantium. Renamed Constantinople, it became the new capital of the Roman Empire and a testament to Constantine's vision for a Christian and imperial metropolis. This strategic move not only fortified the eastern frontier but also marked the beginning of Byzantine prominence, as Constantinople evolved into a flourishing center of culture, trade, and political power for over a millennium."
            }
            else if(yearP === '400'){
                hero.style.backgroundImage = "url('assets/images/ad/400.jpg')"
                head.textContent = "Triumph at Oenophyta: Boeotian Victory in Ancient Greece"
                expl.textContent = "The Battle of Oenophyta, fought in 457 BCE, was a significant conflict in ancient Greece between the Boeotian League and Athens during the early stages of the Peloponnesian War. The Boeotians, led by the Theban general Tolmides, secured a decisive victory over the Athenians and their allies. This battle marked a turning point in the power dynamics of the Peloponnesian War, enhancing Boeotian influence and diminishing Athenian dominance in the region. The outcome at Oenophyta had lasting repercussions on the trajectory of the war, highlighting the strategic importance of this lesser-known but impactful engagement in ancient Greek military history."
            }
            else if(yearP === '500'){
                hero.style.backgroundImage = "url('assets/images/ad/500.jpg')"
                head.textContent = "The Dawn of Islam: Prophet Muhammad and the Founding Revelation"
                expl.textContent = "In the 6th century CE, the Islamic religion was founded through the revelations granted to Prophet Muhammad in the Arabian city of Mecca. Born in 570 CE, Muhammad received divine messages from the Angel Gabriel, later compiled into the Quran. The Hijra, the migration from Mecca to Medina in 622 CE, marked the beginning of the Islamic calendar. Muhammad's teachings emphasized monotheism, social justice, and compassion, fostering a community of believers. By the time of his death in 632 CE, Islam had taken root, setting the stage for its expansion across the Arabian Peninsula and beyond. The life and teachings of Prophet Muhammad became the cornerstone of Islamic faith, laying the foundation for a global religious and cultural legacy."
            }
            else if(yearP === '600'){
                hero.style.backgroundImage = "url('assets/images/ad/600.png')"
                head.textContent = "Paper's Genesis: The Ancient Art of Papermaking in China"
                expl.textContent = "The invention of papermaking in China during the Eastern Han Dynasty (25-220 CE) stands as a transformative leap in human communication and knowledge preservation. Cai Lun, a eunuch court official, is credited with the standardization of paper production in 105 CE. This innovative process involved macerating mulberry bark, hemp, rags, and other fibers, forming a pulp that was then pressed and dried into sheets. The result was a lightweight, durable, and versatile material that surpassed traditional writing surfaces like bamboo and silk. The advent of paper significantly democratized access to information, enabling the spread of literature, art, and knowledge, and paving the way for the development of written cultures worldwide."
            }
            else if(yearP === '700'){
                hero.style.backgroundImage = "url('assets/images/ad/700.png')"
                head.textContent = "Charlemagne: Father of the Carolingian Empire"
                expl.textContent = 'Charlemagne, born in 742 CE, emerged as a pivotal figure in European history, earning the title "Father of Europe." Crowned King of the Franks in 768 CE, he expanded his realm through military conquests, uniting much of Western and Central Europe. In 800 CE, Charlemagne was crowned Holy Roman Emperor by Pope Leo III, symbolizing the revival of imperial authority. Charlemagnes reign fostered cultural and educational revival, known as the Carolingian Renaissance, promoting learning and the preservation of classical knowledge. His legacy as a unifier and patron of learning left an enduring impact on European history, shaping the medieval period and influencing the development of European institutions.'
            }
            else if(yearP === '800'){
                hero.style.backgroundImage = "url('assets/images/ad/800.jpeg')"
                head.textContent = "Gunpowder's Genesis: China's Explosive Innovation"
                expl.textContent = "The invention of gunpowder in ancient China during the 9th century CE marked a revolutionary moment in the history of warfare and technology. Developed by Chinese alchemists in their quest for an elixir of immortality, gunpowder, primarily consisting of saltpeter, charcoal, and sulfur, inadvertently became a powerful explosive. Its earliest documented use was in the creation of fireworks, but its military applications soon followed. By the 11th century, gunpowder-based weapons, including flamethrowers and early forms of gunpowder artillery, played a significant role in Chinese military strategies. The dissemination of gunpowder technology westward contributed to the transformation of military tactics on a global scale, shaping the course of history and warfare for centuries to come."
            }
            else if(yearP === '900'){
                hero.style.backgroundImage = "url('assets/images/ad/900.jpeg')"
                head.textContent = "Maldon's Defiant Stand: Anglo-Saxon Valor in the Face of Viking Onslaught"
                expl.textContent = "The Battle of Maldon, fought in 991 CE, was a poignant clash between the Anglo-Saxons and Viking invaders near Maldon, Essex. Led by Ealdorman Byrhtnoth, the Anglo-Saxon forces displayed exceptional bravery in defending England against the Viking raiders. The battle, recounted in the epic poem 'The Battle of Maldon,' captures the valor of the Anglo-Saxon warriors, their adherence to a code of honor, and the tragic outcome as Byrhtnoth falls in battle. While the Anglo-Saxons faced defeat, the Battle of Maldon remains a testament to the indomitable spirit of a people resisting Viking incursions during this tumultuous period in English history."
            }
            else if(yearP === '1000'){
                hero.style.backgroundImage = "url('assets/images/ad/1000.jpeg')"
                head.textContent = "The Turning Tides: Battle of Hastings and the Norman Conquest"
                expl.textContent = "In 1066, the Battle of Hastings took place in England. This decisive confrontation between the Norman-French army, led by William the Conqueror, and the English forces under King Harold II determined the course of English history. William's victory at Hastings marked the end of Anglo-Saxon rule and the beginning of Norman dominance in England. The Battle of Hastings is a pivotal event in the Norman Conquest of England, leading to William's coronation as King of England in 1066 and the subsequent Norman influence on English culture, language, and governance."
            }
            else if(yearP === '1100'){
                hero.style.backgroundImage = "url('assets/images/ad/1100.jpeg')"
                head.textContent = "Academic Legacy Begins: The Founding of the University of Oxford"
                expl.textContent = "The University of Oxford, established in the late 12th century, holds the distinction of being one of the oldest and most prestigious universities in the world. While the exact founding date remains uncertain, it is generally attributed to the arrival of scholars in Oxford in the 12th century, with teaching activities formalized over time. This venerable institution played a crucial role in the development of higher education and intellectual pursuits, laying the foundation for centuries of academic excellence and influencing educational systems globally."
            }
            else if(yearP === '1200'){
                hero.style.backgroundImage = "url('assets/images/ad/1200.jpeg')"
                head.textContent = "Marco Polo's Odyssey: Exploring the Silk Road and Beyond"
                expl.textContent = "In the 13th century, the Venetian explorer Marco Polo embarked on a groundbreaking journey across Asia, leaving an indelible mark on global history. Setting out with his father and uncle in 1271, Polo traversed the Silk Road, reaching the court of Kublai Khan in China. His extensive travels through regions like Persia, Central Asia, and Southeast Asia provided Europeans with unprecedented insights into the cultures, customs, and riches of the East."
            }
            else if(yearP === '1300'){
                hero.style.backgroundImage = "url('assets/images/ad/1300.jpeg')"
                head.textContent = "Hundred Years' War: Enduring Strife and Shifting Fortunes"
                expl.textContent = "The Hundred Years' War, spanning from 1337 to 1453, was a prolonged and complex conflict between England and France that shaped the course of medieval European history. Rooted in territorial disputes and claims to the French throne, the war witnessed iconic battles such as Agincourt and Joan of Arc's pivotal role. Marked by periods of truce, shifting alliances, and dynastic struggles, the war concluded with the Treaty of Picquigny in 1475. The Hundred Years' War left a profound impact, influencing military tactics, social structures, and the emergence of national identities in both England and France."
            }
            else if(yearP === '1400'){
                hero.style.backgroundImage = "url('assets/images/ad/1400.jpeg')"
                head.textContent = "Gutenberg's Revolution: The Printing Press and the Dawn of Information Age"
                expl.textContent = "One significant event from the 15th century is the invention of the printing press by Johannes Gutenberg around 1440. This invention revolutionized the production of books and disseminated knowledge on an unprecedented scale. The printing press played a pivotal role in the Renaissance, Reformation, and the spread of ideas across Europe, democratizing access to information and contributing to the cultural and intellectual transformations of the time."
            }
            else if(yearP === '1500'){
                hero.style.backgroundImage = "url('assets/images/ad/1500.jpeg')"
                head.textContent = "Mona Lisa: Enigmatic Beauty in Art's Masterpiece"
                expl.textContent = "Painted by Leonardo da Vinci in the early 16th century, the Mona Lisa is one of the most iconic and enigmatic artworks in the history of Western art. Housed in the Louvre Museum in Paris, this portrait of Lisa Gherardini has captivated audiences for centuries, not only for its exquisite technique and subtle use of sfumato but also for the mysterious smile that seems to elude precise interpretation. The Mona Lisa stands as a symbol of Renaissance art, humanism, and the enduring allure of the enigmatic."
            }
            else if(yearP === '1600'){
                hero.style.backgroundImage = "url('assets/images/ad/1600.jpeg')"
                head.textContent = "Elizabeth I: The Virgin Queen's Reign of Gloriana"
                expl.textContent = "Elizabeth I, daughter of Henry VIII and Anne Boleyn, ascended to the English throne in 1558, marking the beginning of one of the most illustrious reigns in English history. Known as the 'Virgin Queen,' Elizabeth I ruled for 45 years until her death in 1603. Her era, often referred to as the Elizabethan Age, was characterized by cultural flourishing, economic growth, and naval triumphs, including the defeat of the Spanish Armada in 1588. Elizabeth I's astute political acumen, patronage of the arts, and unwavering leadership left an indelible mark on England and secured her place as one of the most iconic monarchs in history."
            }
            else if(yearP === '1700'){
                hero.style.backgroundImage = "url('assets/images/ad/1700.jpeg')"
                head.textContent = "The American Revolution: Birth of a Nation's Independence"
                expl.textContent = "The American Revolution, spanning from 1775 to 1783, marked a transformative period in which thirteen American colonies sought independence from British rule. Fueled by grievances over taxation without representation and a desire for self-governance, the conflict evolved from initial skirmishes like the Battles of Lexington and Concord to full-scale war. Notable events such as the Declaration of Independence in 1776 and the military alliance with France played pivotal roles. The war concluded with the Treaty of Paris in 1783, recognizing the United States as an independent nation. The American Revolution's ideals of liberty and democracy reverberated globally, influencing future movements for self-determination and shaping the foundations of the United States."
            }
            else if(yearP === '1800'){
                hero.style.backgroundImage = "url('assets/images/ad/1800.jpeg')"
                head.textContent = "Congress of Vienna: Diplomacy and the Reconstruction of Europe"
                expl.textContent = "The Congress of Vienna, convened in 1814-1815, stands as a watershed moment in post-Napoleonic Europe. Led by diplomats including Metternich, Castlereagh, and Talleyrand, the Congress aimed to restore stability and redraw the map of Europe after the Napoleonic Wars. Key objectives included containing revolutionary ideals, balancing power among major nations, and restoring monarchies. The resulting treaties not only redefined national boundaries but also established a system of collective security and diplomacy. While criticized for conservatism, the Congress of Vienna ushered in a prolonged era of relative peace, shaping the political landscape and providing a model for future diplomatic endeavors."
            }
            else if(yearP === '1900'){
                hero.style.backgroundImage = "url('assets/images/ad/1900.jpeg')"
                head.textContent = "World Wars: Unraveling the Twentieth Century"
                expl.textContent = `World War I (1914-1918) and World War II (1939-1945) were two of the most devastating conflicts in human history, reshaping the geopolitical landscape and leaving an indelible mark on the 20th century. World War I, triggered by complex alliances and imperial rivalries, saw trench warfare, new military technologies, and the redrawing of national boundaries in its aftermath.

                World War II, characterized by global scale and ideological clashes, witnessed unprecedented atrocities such as the Holocaust and the use of atomic weapons. The conflict involved major powers and alliances, ultimately leading to the emergence of the United States and the Soviet Union as superpowers. The aftermath of World War II set the stage for the Cold War, the establishment of the United Nations, and a redefined world order, profoundly shaping the course of contemporary history.`
            }
            else if(yearP === '2000'){
                hero.style.backgroundImage = "url('assets/images/ad/2000.jpeg')"
                head.textContent = "COVID-19 Pandemic: Unprecedented Global Health Crisis"
                expl.textContent = `The COVID-19 pandemic, caused by the novel coronavirus SARS-CoV-2, emerged in late 2019 and rapidly evolved into a global health crisis. Characterized by its highly contagious nature, the virus spread worldwide, challenging healthcare systems, economies, and daily life. Governments implemented various measures, including lockdowns, social distancing, and vaccination campaigns, to mitigate the impact.

                The pandemic underscored the interconnectedness of the modern world and prompted a collective response from scientists, healthcare professionals, and governments. The quest for effective vaccines and treatments became a global priority, leading to unprecedented collaboration in scientific research. The COVID-19 pandemic has left a profound and lasting impact on public health, economies, and societal norms, emphasizing the need for global cooperation in the face of emerging health threats.`
            }

        }
        else{
            alert("Please enter valid year")
            searchBar.style.transform = "translateY(0)"
        }
    }

})



