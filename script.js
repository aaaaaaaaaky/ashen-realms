
/* ==========================================
   THE ASHEN REALMS
   WEBSITE CONTENT AND INTERACTIONS
========================================== */

const image = {
    home: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1800&q=85",

    history: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=1600&q=85",

    geography: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=85",

    capital: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=1600&q=85",

    faction: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=85",

    race: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1600&q=85",

    rules: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=85",

    recap: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=1600&q=85",

    npc: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1600&q=85"
};


/* ==========================================
   WEBSITE PAGE DATA
========================================== */

const pages = {

    "history.html": {
        title: "World History Timeline",
        category: "THE CHRONICLES",
        description: "Every kingdom has a beginning. Every legend has a truth buried beneath it.",
        image: image.history,

        sections: [
            {
                title: "The First Dawn",
                text: "Long before kingdoms were established, the five great regions were connected by mysterious pathways known as the Dawnways. Ancient legends claim that these pathways were created by beings who walked beneath the stars."
            },
            {
                title: "The Crown of Embers",
                text: "Queen Maereth I united the independent city-states under a single crown. Her reign introduced common laws, trade agreements, and the first great roads connecting the Riverlands to the distant territories."
            },
            {
                title: "The Sundering",
                text: "A failed attempt to control the power of the Dawnways caused a devastating magical disturbance. Settlements disappeared, old roads collapsed, and the once-connected regions became isolated."
            },
            {
                title: "The Quiet Century",
                text: "Survivors slowly rebuilt their communities. Independent guilds, local leaders, and protectors of the wilderness emerged. The old royal authority weakened as new powers developed."
            },
            {
                title: "The Age of the Waking Bell",
                text: "Year 843 A.R. The bells beneath Valewyn have begun ringing without a keeper. Strange symbols appear on ancient maps, suggesting that the forgotten Dawnways may be awakening once again."
            }
        ]
    },

    "geography.html": {
        title: "Map & Geography",
        category: "THE LANDS OF THE REALM",
        description: "Five distinct regions make up the Ashen Realms, each with its own environment, culture, and secrets.",
        image: image.geography,

        sections: [
            {
                title: "The Riverlands",
                text: "A fertile region surrounding the Silverflow River. It contains farming settlements, trading towns, bridges, and the majority of the realm's human population."
            },
            {
                title: "The Thornwood",
                text: "A vast ancient forest filled with towering trees, hidden paths, forgotten shrines, and unusual wildlife. The Verdant Wardens protect its oldest territories."
            },
            {
                title: "The Ashen Peaks",
                text: "A cold mountain range containing valuable minerals, abandoned halls, underground settlements, and the ancestral homes of the Khardun."
            },
            {
                title: "The Sable Coast",
                text: "A region of rocky shorelines, fishing villages, busy ports, and stormy islands. It is known for shipbuilders, merchants, and travelers."
            },
            {
                title: "The Glasswild",
                text: "An expansive grassland where unusual glass-like formations rise from the earth after powerful storms. Many believe these formations are connected to the ancient Dawnways."
            }
        ]
    },

    "capital.html": {
        title: "The Capital City of Valewyn",
        category: "THE HEART OF THE REALM",
        description: "A city of royal influence, busy markets, ancient archives, and mysteries hidden beneath its streets.",
        image: image.capital,

        sections: [
            {
                title: "The Crownward",
                text: "The political center of Valewyn. The royal palace and Hall of Accord are located here, where the monarch and council discuss matters concerning the realm."
            },
            {
                title: "Lantern Market",
                text: "The busiest commercial district of the capital. Merchants, performers, craftsmen, and travelers gather here to exchange goods and stories."
            },
            {
                title: "The Old Steps",
                text: "A network of narrow streets constructed over the remains of the pre-Sundering city. Several stairways lead to sealed underground chambers."
            },
            {
                title: "The Archive Spire",
                text: "A massive public library maintained by historians and the Luminous Conclave. It contains records, old maps, magical studies, and documents from previous centuries."
            },
            {
                title: "The Bell Below",
                text: "A sealed chamber beneath Valewyn. No living keeper has entered it for generations, yet its bells have recently begun sounding throughout the city."
            }
        ]
    },

    /* FACTIONS */

    "mages-guild.html": {
        title: "The Luminous Conclave",
        category: "FACTION PROFILE 01",
        description: "Knowledge is a responsibility, and magic is a power that must be understood.",
        image: image.faction,

        sections: [
            {
                title: "Purpose",
                text: "The Luminous Conclave is an organization of scholars, researchers, and practitioners dedicated to studying and preserving arcane knowledge."
            },
            {
                title: "Headquarters",
                text: "The Archive Spire in Valewyn serves as the Conclave's main center of research and education."
            },
            {
                title: "Values",
                text: "Its members believe that knowledge should be shared responsibly. Magical ability alone does not grant a person wisdom or authority."
            },
            {
                title: "Notable Figure",
                text: "Magister Elowen Vey is an experienced archivist searching for forgotten records connected to the ancient Dawnways."
            },
            {
                title: "Adventure Hook",
                text: "A mysterious page has appeared inside a locked book. Its handwriting belongs to a scholar who disappeared more than a century ago."
            }
        ]
    },

    "thieves-guild.html": {
        title: "The Gloam Network",
        category: "FACTION PROFILE 02",
        description: "Information travels farther than gold, and secrets always have a price.",
        image: image.faction,

        sections: [
            {
                title: "Purpose",
                text: "The Gloam Network is an underground organization of informants, couriers, negotiators, and people who survive through information and connections."
            },
            {
                title: "Headquarters",
                text: "The organization has no permanent headquarters. Its members use changing meeting places throughout Valewyn and neighboring towns."
            },
            {
                title: "Values",
                text: "Loyalty is earned, agreements are remembered, and unnecessary harm is considered bad business."
            },
            {
                title: "Notable Figure",
                text: "Mira Quickstep Sorn is a skilled courier who knows the hidden streets and forgotten routes of Valewyn."
            },
            {
                title: "Adventure Hook",
                text: "A sealed letter disappears from a guarded room. The only clue is a note asking the party to find its intended recipient."
            }
        ]
    },

    "wardens.html": {
        title: "The Verdant Wardens",
        category: "FACTION PROFILE 03",
        description: "The wilderness remembers what civilization chooses to forget.",
        image: image.faction,

        sections: [
            {
                title: "Purpose",
                text: "The Verdant Wardens protect sacred groves, ancient forests, wildlife, and communities threatened by unnatural changes in the environment."
            },
            {
                title: "Headquarters",
                text: "The Root Hall is a hidden sanctuary located deep within the Thornwood."
            },
            {
                title: "Values",
                text: "The Wardens believe that nature and civilization can coexist when people respect the balance of the world."
            },
            {
                title: "Notable Figure",
                text: "Keeper Rowan Thistle is a respected mediator who has spent decades protecting the forest and its inhabitants."
            },
            {
                title: "Adventure Hook",
                text: "Animals are abandoning a protected grove. The Wardens suspect that something unusual is moving beneath the roots."
            }
        ]
    },

    "iron-vow.html": {
        title: "The Iron Vow",
        category: "FACTION PROFILE 04",
        description: "An oath means nothing unless it protects someone.",
        image: image.faction,

        sections: [
            {
                title: "Purpose",
                text: "The Iron Vow is an organized company of guards, mediators, and traveling protectors who defend vulnerable communities."
            },
            {
                title: "Headquarters",
                text: "The Bastion of Accord stands beside the eastern gate of Valewyn."
            },
            {
                title: "Values",
                text: "The organization values discipline, honesty, responsibility, and the protection of ordinary people."
            },
            {
                title: "Notable Figure",
                text: "Captain Dain Orrel is a respected commander who has recently begun questioning the council's latest decisions."
            },
            {
                title: "Adventure Hook",
                text: "An entire patrol has disappeared along a road that should be safe. Their lanterns remain standing in an unusual formation."
            }
        ]
    },

    "seekers.html": {
        title: "The Starbound Seekers",
        category: "FACTION PROFILE 05",
        description: "The past is not gone. It is simply waiting to be discovered.",
        image: image.faction,

        sections: [
            {
                title: "Purpose",
                text: "The Starbound Seekers are explorers, cartographers, and historians who investigate ancient ruins and document forgotten civilizations."
            },
            {
                title: "Headquarters",
                text: "The Wayfarers' Lodge in Valewyn contains maps, research documents, and records from previous expeditions."
            },
            {
                title: "Values",
                text: "The Seekers prioritize evidence, curiosity, respect for local communities, and the preservation of historical knowledge."
            },
            {
                title: "Notable Figure",
                text: "Tamsin Quill is a talented cartographer whose newest map contains a road that does not appear on any known record."
            },
            {
                title: "Adventure Hook",
                text: "A newly discovered star chart points toward a location that seems to disappear from every existing map."
            }
        ]
    },

    /* PLAYABLE RACES AND CULTURES */

    "humans.html": {
        title: "Humans of the Riverlands",
        category: "PLAYABLE CULTURE 01",
        description: "A people defined not by one tradition, but by countless communities and possibilities.",
        image: image.race,

        sections: [
            {
                title: "Overview",
                text: "Humans are found throughout the Ashen Realms. Their communities differ according to their environment, local history, occupation, and family traditions."
            },
            {
                title: "Community",
                text: "Many human settlements organize around neighborhood councils, local trade, family businesses, and guild apprenticeships."
            },
            {
                title: "Traditions",
                text: "The Riverwake Festival honors the Silverflow River and the generations of people who maintain its bridges and waterways."
            },
            {
                title: "Roleplaying Ideas",
                text: "A traveling medic, ambitious craftsperson, village historian, merchant, or diplomat learning to trust unfamiliar people."
            },
            {
                title: "Names and Language",
                text: "Human names vary widely between regions. Family names may reference an occupation, geographical location, or respected ancestor."
            }
        ]
    },

    "elves.html": {
        title: "The Aelori",
        category: "PLAYABLE CULTURE 02",
        description: "Keepers of memory, guardians of old paths, and observers of the stars.",
        image: image.race,

        sections: [
            {
                title: "Overview",
                text: "The Aelori are long-lived people whose communities are often connected to woodland groves, high observatories, and ancient traditions."
            },
            {
                title: "Community",
                text: "Some Aelori live in close-knit forest settlements, while others travel as artists, historians, astronomers, and scholars."
            },
            {
                title: "Traditions",
                text: "Memory-weaving ceremonies preserve important events through music, carved patterns, and shared storytelling."
            },
            {
                title: "Roleplaying Ideas",
                text: "A wandering musician, curious apprentice, guardian of forgotten paths, or scholar seeking a new understanding of the world."
            },
            {
                title: "Names and Language",
                text: "Aelori names are commonly inspired by nature, stars, family memories, and meaningful experiences."
            }
        ]
    },

    "dwarves.html": {
        title: "The Khardun",
        category: "PLAYABLE CULTURE 03",
        description: "Mountain communities whose greatest treasures are their knowledge and craftsmanship.",
        image: image.race,

        sections: [
            {
                title: "Overview",
                text: "The Khardun are traditionally associated with the fortified mountain halls and underground settlements of the Ashen Peaks."
            },
            {
                title: "Community",
                text: "Their communities often organize around craft guilds, extended households, and shared responsibility for preserving knowledge."
            },
            {
                title: "Traditions",
                text: "The Stonekeeping ceremony records community promises, important lessons, and historical events in a public archive."
            },
            {
                title: "Roleplaying Ideas",
                text: "An inventive engineer, patient mediator, traveling cook, historian, or craftsperson searching for a lost workshop."
            },
            {
                title: "Names and Language",
                text: "Khardun names may honor a craft, mountain feature, family member, or respected community leader."
            }
        ]
    },

    "tieflings.html": {
        title: "The Emberkin",
        category: "PLAYABLE CULTURE 04",
        description: "A diverse people whose identities are larger than the stories told about their ancestry.",
        image: image.race,

        sections: [
            {
                title: "Overview",
                text: "The Emberkin are diverse communities whose ancestors were connected to an ancient pact. The details of this pact remain disputed among historians."
            },
            {
                title: "Community",
                text: "Emberkin families live throughout the realm and maintain strong networks of friendship, mutual support, and shared traditions."
            },
            {
                title: "Traditions",
                text: "The Open Table welcomes travelers and newcomers to share a meal without questions about their ancestry or background."
            },
            {
                title: "Roleplaying Ideas",
                text: "A community advocate, traveling performer, researcher, mediator, or curious individual seeking to understand their family's history."
            },
            {
                title: "Names and Language",
                text: "Emberkin names are chosen freely and may reflect family history, personal meaning, or local cultural influences."
            }
        ]
    },

    "orcs.html": {
        title: "The Varkai",
        category: "PLAYABLE CULTURE 05",
        description: "Communities of the highlands and open steppe, connected through kinship and stories.",
        image: image.race,

        sections: [
            {
                title: "Overview",
                text: "The Varkai are people of the highlands and open steppe, connected by trade routes, oral histories, and strong community traditions."
            },
            {
                title: "Community",
                text: "Some Varkai communities are settled, others travel throughout the year, and many combine both ways of life."
            },
            {
                title: "Traditions",
                text: "The Longfire gathering brings neighboring families together to exchange stories, skills, news, and experiences."
            },
            {
                title: "Roleplaying Ideas",
                text: "A skilled navigator, storyteller, caravan negotiator, traveling craftsperson, or community representative."
            },
            {
                title: "Names and Language",
                text: "Varkai naming traditions vary widely between families and regions, reflecting personal achievements and shared history."
            }
        ]
    },

    /* HOUSE RULES */

    "house-rules.html": {
        title: "House Rules & Table Guidelines",
        category: "THE PLAYER HANDBOOK",
        description: "A shared guide for creating a respectful, balanced, and enjoyable campaign experience.",
        image: image.rules,

        sections: [
            {
                title: "01. Respect at the Table",
                text: "Every player deserves the opportunity to participate. Listen when others are speaking, avoid unnecessary interruptions, and keep disagreements respectful."
            },
            {
                title: "02. Character Creation",
                text: "Players should discuss their character concepts with the Game Master before the campaign begins. Characters should fit the world and contribute to the shared story."
            },
            {
                title: "03. Ability Checks",
                text: "The Game Master determines when an ability check is necessary. Players should describe their intended actions clearly before the appropriate roll is made."
            },
            {
                title: "04. Combat and Teamwork",
                text: "Players should respect turn order, communicate their intentions, and work together. Creative teamwork and problem-solving are encouraged."
            },
            {
                title: "05. Player Safety",
                text: "Any player may pause the session or raise a concern. Uncomfortable themes can be discussed, adjusted, or removed from the campaign."
            },
            {
                title: "06. Rule Clarifications",
                text: "The Game Master may make temporary rulings when a situation is unclear. Any lasting change to campaign rules should be discussed with the group."
            },
            {
                title: "Important Note",
                text: "These are original campaign guidelines, not official Dungeons & Dragons or Pathfinder rules. The group should agree on any changes before they take effect."
            }
        ]
    },

    /* CAMPAIGN RECAP */

    "campaign-recap.html": {
        title: "The Shattered Bell",
        category: "CURRENT CAMPAIGN JOURNAL",
        description: "A mysterious invitation, an ancient chamber, and a sound that should not exist.",
        image: image.recap,

        sections: [
            {
                title: "Previously in the Campaign",
                text: "The party arrived in Valewyn after receiving an unsigned invitation bearing the seal of the old royal observatory. The message contained only a date, a location, and an unfamiliar symbol."
            },
            {
                title: "The Market Encounter",
                text: "At Lantern Market, the party met a street performer who recognized the invitation. Before leaving, the performer warned them not to visit the Archive Spire after sunset."
            },
            {
                title: "A Discovery Beneath the City",
                text: "A hidden stairwell led the party to a forgotten chamber containing a cracked bell and an old map marked with five unfamiliar symbols."
            },
            {
                title: "The Competing Interests",
                text: "The Luminous Conclave wants the map secured for research. Meanwhile, the Gloam Network offers to help the party understand its markings."
            },
            {
                title: "The Choice Ahead",
                text: "The five symbols correspond to different regions of the Ashen Realms. The party must decide whom to trust and which region to investigate first."
            },
            {
                title: "Next Session",
                text: "The next adventure begins with the party deciding whether to follow the Conclave's request or accept the Gloam Network's offer."
            }
        ]
    }

};


/* ==========================================
   NPC CODEX DATA
========================================== */

const npcs = [

    {
        name: "Magister Elowen Vey",
        faction: "Luminous Conclave",
        role: "Archivist",
        description: "An experienced scholar searching for missing records connected to the ancient Dawnways."
    },

    {
        name: "Mira Quickstep Sorn",
        faction: "Gloam Network",
        role: "Courier",
        description: "A resourceful courier who knows the hidden streets and forgotten routes of Valewyn."
    },

    {
        name: "Keeper Rowan Thistle",
        faction: "Verdant Wardens",
        role: "Forest Keeper",
        description: "A patient protector of the Thornwood who seeks to understand the changes occurring beneath the forest."
    },

    {
        name: "Captain Dain Orrel",
        faction: "Iron Vow",
        role: "Commander",
        description: "A respected officer questioning the decisions of the royal council."
    },

    {
        name: "Tamsin Quill",
        faction: "Starbound Seekers",
        role: "Cartographer",
        description: "An explorer whose latest map contains a road that appears on no known record."
    },

    {
        name: "Nella Reed",
        faction: "Independent",
        role: "Innkeeper",
        description: "The owner of the Lantern Rest, a popular inn where travelers exchange stories."
    },

    {
        name: "Borin Ashmantle",
        faction: "Khardun Artisan",
        role: "Engineer",
        description: "A skilled engineer who recognizes unusual markings on ancient mechanisms."
    },

    {
        name: "Sera Vale",
        faction: "Independent",
        role: "Performer",
        description: "A street musician who remembers the mysterious tune heard before the Bell Below rang."
    }

];


/* ==========================================
   HOME PAGE
========================================== */

function renderHome() {

    return `
        <section class="home-hero">

            <div class="hero-content">

                <p class="eyebrow">
                    A WORLD WAITING TO BE DISCOVERED
                </p>

                <h1>
                    THE ASHEN<br>
                    <span>REALMS</span>
                </h1>

                <p class="hero-description">
                    Old magic stirs beneath forgotten roads.
                    Five regions stand at the edge of change.
                    The future of the realm is waiting to be written.
                </p>

                <a href="history.html" class="button">
                    BEGIN YOUR JOURNEY →
                </a>

            </div>

        </section>


        <section class="section">

            <div class="section-heading">

                <p class="eyebrow">YOUR FIELD GUIDE</p>

                <h2>Explore the Realm</h2>

                <p>
                    Discover the history, geography, organizations,
                    cultures, and stories that shape the Ashen Realms.
                </p>

            </div>


            <div class="feature-grid">

                <a href="history.html" class="feature-card">

                    <img src="${image.history}" alt="Ancient historical archive">

                    <div class="feature-info">
                        <span>01 / HISTORY</span>
                        <h3>World History</h3>
                        <p>Discover the events that shaped the realm.</p>
                    </div>

                </a>


                <a href="geography.html" class="feature-card">

                    <img src="${image.geography}" alt="Mountain landscape">

                    <div class="feature-info">
                        <span>02 / GEOGRAPHY</span>
                        <h3>Map & Geography</h3>
                        <p>Explore the five regions of the world.</p>
                    </div>

                </a>


                <a href="capital.html" class="feature-card">

                    <img src="${image.capital}" alt="Fantasy city">

                    <div class="feature-info">
                        <span>03 / CIVILIZATION</span>
                        <h3>Capital City</h3>
                        <p>Discover the streets and secrets of Valewyn.</p>
                    </div>

                </a>


                <a href="mages-guild.html" class="feature-card">

                    <img src="${image.faction}" alt="Fantasy magical setting">

                    <div class="feature-info">
                        <span>04 / FACTIONS</span>
                        <h3>Guilds & Factions</h3>
                        <p>Meet the organizations shaping the realm.</p>
                    </div>

                </a>


                <a href="humans.html" class="feature-card">

                    <img src="${image.race}" alt="Fantasy woodland">

                    <div class="feature-info">
                        <span>05 / CULTURES</span>
                        <h3>Playable Cultures</h3>
                        <p>Explore five distinct peoples and traditions.</p>
                    </div>

                </a>


                <a href="house-rules.html" class="feature-card">

                    <img src="${image.rules}" alt="Fantasy book">

                    <div class="feature-info">
                        <span>06 / GUIDELINES</span>
                        <h3>House Rules</h3>
                        <p>Read the campaign's player guidelines.</p>
                    </div>

                </a>


                <a href="campaign-recap.html" class="feature-card">

                    <img src="${image.recap}" alt="Ancient fantasy architecture">

                    <div class="feature-info">
                        <span>07 / CAMPAIGN</span>
                        <h3>Campaign Journal</h3>
                        <p>Catch up on the party's latest discoveries.</p>
                    </div>

                </a>


                <a href="npc-codex.html" class="feature-card">

                    <img src="${image.npc}" alt="Fantasy character portrait reference">

                    <div class="feature-info">
                        <span>08 / CHARACTERS</span>
                        <h3>NPC Codex</h3>
                        <p>Meet the people of the Ashen Realms.</p>
                    </div>

                </a>

            </div>

        </section>


        <section class="quote-section">

            <p>
                "The world does not end when the old stories do.
                It begins again."
            </p>

            <small>
                — Inscription at the Archive Spire
            </small>

        </section>


        <section class="section">

            <div class="image-section">

                <img src="${image.capital}" alt="The ancient capital of Valewyn">

                <div>

                    <p class="eyebrow">THE CENTRAL MYSTERY</p>

                    <h2>A Bell With No Keeper</h2>

                    <p>
                        Deep beneath the capital of Valewyn,
                        a sealed bell has begun to ring.

                        Its sound travels through forgotten pathways,
                        awakening places believed to have disappeared
                        centuries ago.

                        The party's discoveries may change the future
                        of the entire realm.
                    </p>

                    <br>

                    <a href="campaign-recap.html" class="button">
                        READ THE CAMPAIGN RECAP →
                    </a>

                </div>

            </div>

        </section>
    `;
}


/* ==========================================
   MAP AND GEOGRAPHY
========================================== */

function renderMap() {

    return `
        <div class="map-container">

            <svg class="world-map"
                 viewBox="0 0 900 560"
                 role="img"
                 aria-label="Illustrated fictional map of the five regions of the Ashen Realms">

                <defs>
                    <pattern id="landPattern"
                             width="12" height="12"
                             patternUnits="userSpaceOnUse">
                        <circle cx="3" cy="3" r="1"
                                fill="#a78d5c" opacity=".3"/>
                    </pattern>
                </defs>

                <rect width="900" height="560" fill="#182b30"/>

                <path d="M80 120 L220 60 L390 100
                         L500 60 L670 120 L820 90
                         L850 260 L780 390 L620 470
                         L420 500 L240 430 L90 310 Z"
                      fill="#657b56"
                      stroke="#d3b77c"
                      stroke-width="4"/>

                <path d="M80 120 L220 60 L390 100
                         L500 60 L670 120 L820 90
                         L850 260 L780 390 L620 470
                         L420 500 L240 430 L90 310 Z"
                      fill="url(#landPattern)"/>

                <path d="M340 100 L390 180 L350 260
                         L420 330 L390 450"
                      stroke="#d2c08b"
                      stroke-width="9"
                      fill="none"
                      opacity=".9"/>

                <path d="M390 180 Q470 240 500 350
                         Q530 400 620 430"
                      stroke="#5ba6b5"
                      stroke-width="12"
                      fill="none"/>

                <path d="M120 130 L180 180 L220 150
                         L260 210 L300 160"
                      stroke="#b9c0c2"
                      stroke-width="5"
                      fill="none"/>

                <path d="M580 100 L620 160 L680 130
                         L730 190 L780 160"
                      stroke="#b9c0c2"
                      stroke-width="5"
                      fill="none"/>

                <text x="220" y="240" class="map-label">
                    THORNWOOD
                </text>

                <text x="580" y="190" class="map-label">
                    ASHEN PEAKS
                </text>

                <text x="440" y="300" class="map-label">
                    RIVERLANDS
                </text>

                <text x="660" y="380" class="map-label">
                    GLASSWILD
                </text>

                <text x="170" y="390" class="map-label">
                    SABLE COAST
                </text>

                <circle cx="445" cy="260" r="9" fill="#e9c77f"/>

                <text x="465" y="250"
                      fill="#fff0c9"
                      font-size="15">
                    VALEWYN
                </text>

            </svg>

            <p class="map-note">
                Fictional illustrated world map of the Ashen Realms.
                Locations and boundaries are campaign references.
            </p>

        </div>
    `;
}


/* ==========================================
   NPC CODEX
========================================== */

function renderNPCs() {

    return `
        <div class="search-box">

            <input
                type="search"
                id="npcSearch"
                placeholder="Search NPC name, role, or faction..."
                aria-label="Search NPC directory"
            >

        </div>

        <p id="npcCount" class="map-note">
            Showing ${npcs.length} characters
        </p>

        <div class="npc-grid" id="npcGrid">

            ${npcs.map(npc => `

                <article class="npc-card"
                    data-search="${(
                        npc.name + " " +
                        npc.faction + " " +
                        npc.role + " " +
                        npc.description
                    ).toLowerCase()}">

                    <p class="eyebrow">
                        ${npc.faction}
                    </p>

                    <h3>${npc.name}</h3>

                    <strong>${npc.role}</strong>

                    <p>${npc.description}</p>

                </article>

            `).join("")}

        </div>
    `;
}


/* ==========================================
   GENERAL CONTENT PAGE
========================================== */

function renderContentPage(page) {

    let cards = page.sections.map((section, index) => `

        <article class="content-card">

            <span class="number">
                ENTRY ${String(index + 1).padStart(2, "0")}
            </span>

            <h2>${section.title}</h2>

            <p>${section.text}</p>

        </article>

    `).join("");


    let extra = "";

    if (location.pathname.endsWith("geography.html")) {
        extra = renderMap();
    }

    if (location.pathname.endsWith("capital.html")) {

        extra = `
            <div class="notice">

                <h3>Valewyn at a Glance</h3>

                <p>
                    Population: Approximately 48,000
                    <br>
                    Government: Crown and Council
                    <br>
                    Main Trade: River commerce and craftsmanship
                    <br>
                    Known For: Ancient archives and the Bell Below
                </p>

            </div>
        `;
    }

    if (location.pathname.endsWith("house-rules.html")) {

        extra = `
            <div class="notice">

                <h3>Player Reminder</h3>

                <p>
                    These guidelines are a starting point.
                    The group should discuss any changes together
                    to ensure that the campaign remains fair,
                    welcoming, and enjoyable.
                </p>

            </div>
        `;
    }

    if (location.pathname.endsWith("campaign-recap.html")) {

        extra = `
            <div class="notice">

                <h3>Current Party Objective</h3>

                <p>
                    Identify the five symbols on the mysterious map
                    and decide which region the party will investigate
                    first.
                </p>

            </div>
        `;
    }


    return `

        <section class="page-hero"
                 style="--hero-image: url('${page.image}')">

            <div>

                <p class="eyebrow">
                    THE ASHEN REALMS / FIELD GUIDE
                </p>

                <h1>${page.title}</h1>

                <p>${page.description}</p>

            </div>

        </section>


        <section class="section">

            <div class="section-heading">

                <p class="eyebrow">
                    ${page.category}
                </p>

                <h2>Explore the Records</h2>

                <p>
                    Discover the information, history,
                    and important details of this part
                    of the Ashen Realms.
                </p>

            </div>


            <div class="content-grid">
                ${cards}
            </div>

            ${extra}

        </section>

    `;
}


/* ==========================================
   PAGE DETECTION AND RENDERING
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const app = document.getElementById("app");

    const currentPage =
        location.pathname.split("/").pop() || "index.html";


    if (currentPage === "index.html") {

        app.innerHTML = renderHome();

        document.title =
            "The Ashen Realms | Campaign Hub";

    } else if (currentPage === "npc-codex.html") {

        app.innerHTML = `

            <section class="page-hero"
                style="--hero-image: url('${image.npc}')">

                <div>

                    <p class="eyebrow">
                        THE PEOPLE BEHIND THE LEGENDS
                    </p>

                    <h1>NPC Codex</h1>

                    <p>
                        Meet the allies, scholars, travelers,
                        and important characters of the realm.
                    </p>

                </div>

            </section>

            <section class="section">

                <div class="section-heading">

                    <p class="eyebrow">CHARACTER ARCHIVE</p>

                    <h2>People of the Ashen Realms</h2>

                    <p>
                        Search the directory to discover
                        characters by name, role, or faction.
                    </p>

                </div>

                ${renderNPCs()}

            </section>
        `;

        document.title =
            "NPC Codex | The Ashen Realms";


        // NPC SEARCH FUNCTION

        const searchInput =
            document.getElementById("npcSearch");

        const npcCards =
            document.querySelectorAll(".npc-card");

        const npcCount =
            document.getElementById("npcCount");

        searchInput.addEventListener("input", () => {

            const searchTerm =
                searchInput.value.toLowerCase().trim();

            let visibleCount = 0;

            npcCards.forEach(card => {

                const searchableText =
                    card.dataset.search;

                const isMatch =
                    searchableText.includes(searchTerm);

                card.style.display =
                    isMatch ? "block" : "none";

                if (isMatch) {
                    visibleCount++;
                }

            });

            npcCount.textContent =
                `Showing ${visibleCount} of ${npcs.length} characters`;

        });

    } else {

        const page = pages[currentPage];

        if (page) {

            app.innerHTML =
                renderContentPage(page);

            document.title =
                `${page.title} | The Ashen Realms`;

        } else {

            app.innerHTML = `

                <section class="section">

                    <h1>Page Not Found</h1>

                    <p>
                        The requested archive could not be found.
                    </p>

                    <a href="index.html" class="button">
                        Return Home
                    </a>

                </section>

            `;

        }

    }


    // MOBILE NAVIGATION

    const menuToggle =
        document.getElementById("menuToggle");

    const navigation =
        document.getElementById("navigation");

    menuToggle.addEventListener("click", () => {

        const isOpen =
            navigation.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.textContent =
            isOpen ? "✕" : "☰";

    });

});
