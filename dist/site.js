const pages = {
  home: () => `
    <div class="page-wrap">
      <div class="topline"><span>STUDY WITH US</span><span class="topline-rule"></span><span>NOTTINGHAM · MALAYSIA · CHINA</span></div>
      <section class="home-hero">
        <div class="hero-copy">
          <p class="eyebrow"><span class="eyebrow-dot"></span> A global university, grounded in Nottingham</p>
          <h1>Make your mark<br>on the <em>world.</em></h1>
          <p class="hero-intro">Start with a question. Follow it further. Find your people and shape what comes next across our connected campuses.</p>
          <div class="button-row"><a class="button button-gold" href="programs.html">Explore study areas <span aria-hidden="true">↗</span></a><a class="button button-ghost" href="about.html">Our story <span aria-hidden="true">→</span></a></div>
          <div class="hero-mark"><svg class="castle-mark" viewBox="0 0 54 58" aria-hidden="true"><path d="M8 52V27h8v-9h8v9h7V13h8v14h7v25H8Z"/><path d="M4 52h46M8 27h37M12 35h5v6h-5zm12 0h5v6h-5zm13 0h5v6h-5zm-10 17V42h9v10"/></svg><span>THE UNIVERSITY<br><strong>OF NOTTINGHAM</strong></span></div>
          <span class="hero-index">01 / A PLACE TO BEGIN</span>
        </div>
        <div class="hero-visual"><img src="assets/trent-building.jpg" alt="The Trent Building at University Park campus in Nottingham"><div class="hero-visual-shade"></div><div class="hero-caption"><span>UNIVERSITY PARK</span><span>52°56′ N · 1°12′ W</span></div><div class="hero-circle" aria-hidden="true"><span>Learn<br>without<br>borders</span><b>↘</b></div></div>
        <div class="hero-cut" aria-hidden="true"></div>
      </section>
      <section class="stats-strip" aria-label="University facts"><div class="stat-item"><strong>1881</strong><span>Our story begins</span></div><div class="stat-item"><strong>3</strong><span>Countries with campuses</span></div><div class="stat-item"><strong>40,000<span>+</span></strong><span>Students across our community</span></div><div class="stat-item"><strong>2</strong><span>International campuses</span></div></section>
      <section class="section section-about">
        <div class="section-photo photo-frame"><img src="assets/trent-building.jpg" alt="The historic Trent Building surrounded by gardens"><span class="photo-stamp">A university<br>in motion <b>↗</b></span><span class="photo-credit">UNIVERSITY PARK · NOTTINGHAM</span></div>
        <div class="section-copy"><p class="eyebrow eyebrow-dark">Curiosity has a home</p><h2>Local roots.<br><em>Global outlook.</em></h2><p>University College Nottingham opened in 1881 to make technical and scientific learning available to local people. Today, that spirit of discovery connects students and researchers across the UK, Malaysia and China.</p><p>Different places, shared curiosity — and room to find your own direction.</p><a class="text-link" href="about.html">Meet Nottingham <span>↗</span></a></div>
      </section>
      <section class="section section-programs">
        <div class="section-heading"><div><p class="eyebrow eyebrow-dark">Find your field</p><h2>Big questions.<br><em>Many ways in.</em></h2></div><a class="text-link" href="programs.html">Explore all study areas <span>↗</span></a></div>
        <div class="feature-grid three-up">
          <article class="feature-card"><div class="card-top"><span class="number-mark">01</span>${icon('flask')}</div><h3>Science & discovery</h3><p>Explore living systems, materials, data and the questions shaping tomorrow.</p><a href="programs.html" class="card-link">See study areas <span>↗</span></a></article>
          <article class="feature-card feature-card-ink"><div class="card-top"><span class="number-mark">02</span>${icon('layers')}</div><h3>People & society</h3><p>Understand how ideas, institutions and cultures can change the way we live.</p><a href="programs.html" class="card-link">See study areas <span>↗</span></a></article>
          <article class="feature-card feature-card-gold"><div class="card-top"><span class="number-mark">03</span>${icon('compass')}</div><h3>Making & designing</h3><p>Bring analysis and imagination together to make useful things happen.</p><a href="programs.html" class="card-link">See study areas <span>↗</span></a></article>
        </div>
        <p class="micro-note">Subject areas are a starting point; current courses, awards and campus availability vary by intake.</p>
      </section>
      <section class="dark-feature section">
        <div class="dark-feature-heading"><p class="eyebrow">What a university can do</p><h2>Knowledge with<br><em>somewhere to go.</em></h2><p>Study and research sit close to the world they can help shape.</p><a class="button button-gold" href="why-us.html">Why Nottingham <span aria-hidden="true">↗</span></a></div>
        <div class="dark-feature-list"><div><span>01</span><div><h3>Research that reaches outward</h3><p>Work across disciplines, sectors and borders on questions with real consequence.</p></div>${icon('arrow')}</div><div><span>02</span><div><h3>Learning across places</h3><p>Three countries bring different settings, perspectives and ways to connect.</p></div>${icon('arrow')}</div><div><span>03</span><div><h3>A community built by people</h3><p>Find a society, a team, a mentor or a quiet corner to make your own.</p></div>${icon('arrow')}</div></div>
      </section>
      <section class="section news-section">
        <div class="section-heading"><div><p class="eyebrow eyebrow-dark">From around the campuses</p><h2>Life at Nottingham,<br><em>lately.</em></h2></div><a class="text-link" href="student-reviews.html">Read student voices <span>↗</span></a></div>
        <div class="news-grid">
          <article class="news-card"><div class="news-art art-green"><span>STUDENT SUPPORT</span><b>01</b></div><div class="news-meta"><time datetime="2026-10-22">22 October 2026</time><span>STUDENT LIVING</span></div><h3>Wobble Week 2026</h3><p>Activities and support for students navigating the start of term, homesickness or a new routine.</p><span class="card-link">Student update</span></article>
          <article class="news-card"><div class="news-art art-gold"><span>AFTER FRESHERS</span><b>02</b></div><div class="news-meta"><time datetime="2026-10-07">7 October 2026</time><span>STUDENT UNION</span></div><h3>What’s next after Freshers?</h3><p>Societies, events and volunteering opportunities to explore as the new term gets underway.</p><span class="card-link">Student update</span></article>
          <article class="news-card"><div class="news-art art-blue"><span>FIND YOUR PEOPLE</span><b>03</b></div><div class="news-meta"><time datetime="2026-09-28">28 September 2026</time><span>STUDENT UNION</span></div><h3>Societies, clubs & more</h3><p>Explore sports, creative groups, volunteering and ways to get involved in campus life.</p><span class="card-link">Student update</span></article>
        </div>
        <p class="micro-note">News links point to the University of Nottingham and Students’ Union. Dates reflect each linked story.</p>
      </section>
      <section class="voice-banner"><div class="voice-quote-mark">“</div><blockquote>“Make friends around the world.”</blockquote><div class="voice-byline"><span class="avatar avatar-gold">GW</span><span><strong>Guanzhong W.</strong><small>Global Buddies volunteer · UoNSU</small></span><a href="student-reviews.html" aria-label="Read student voices">↗</a></div></section>
      <section class="cta-band"><div><p class="eyebrow eyebrow-dark">Your next chapter starts with a question</p><h2>Where could it<br><em>take you?</em></h2></div><a class="button button-navy" href="programs.html">Find a study area <span aria-hidden="true">↗</span></a></section>
    </div>`,

  about: () => `
    <div class="page-wrap">
      ${pageHero('About us','A university shaped by curiosity, civic roots and ideas that travel.','ABOUT NOTTINGHAM')}
      <section class="section overview-section"><div class="overview-image"><img src="assets/trent-building.jpg" alt="The Trent Building at University Park campus"><div class="image-label"><span>01 — 1881</span><strong>From a civic college<br>to a global university</strong></div></div><div class="section-copy"><p class="eyebrow eyebrow-dark">Our story</p><h2>One city.<br><em>A world of ideas.</em></h2><p>University College Nottingham opened in 1881, welcoming local people to study technical and scientific subjects. A Royal Charter established the University of Nottingham in 1948.</p><p>Over time, the University grew beyond the city: first into Malaysia, then China. Each campus has its own place and character, connected through a shared university community.</p><p>Our history is still being written by the questions students ask, the research they pursue and the communities they build.</p><a class="text-link" href="why-us.html">See Nottingham today <span>↗</span></a></div></section>
      <section class="section vision-section"><div class="section-heading"><div><p class="eyebrow eyebrow-dark">Purpose & direction</p><h2>Open minds.<br><em>Wider horizons.</em></h2></div><p class="section-deck">A place to learn deeply, connect widely and put knowledge to work.</p></div><div class="vision-grid"><article class="vision-card vision-card-gold"><span class="vision-icon">${icon('sun')}</span><span class="card-kicker">OUR VISION</span><h3>Knowledge that travels</h3><p>Bring ambitious teaching and research into conversation with the needs of people, places and the planet.</p></article><article class="vision-card vision-card-navy"><span class="vision-icon">${icon('compass')}</span><span class="card-kicker">OUR PURPOSE</span><h3>Learning with purpose</h3><p>Give students the space, support and perspective to question, contribute and shape what comes next.</p></article></div></section>
      <section class="stats-panel section"><div class="stats-panel-heading"><p class="eyebrow">A connected community</p><h2>One university,<br><em>many perspectives.</em></h2></div><div class="stats-panel-grid"><div><strong>40,000<span>+</span></strong><span>students across the community</span></div><div><strong>3</strong><span>countries with campuses</span></div><div><strong>1881</strong><span>the year our story began</span></div><div><strong>2</strong><span>international campuses</span></div></div><p class="data-note">Student figure is an approximate institutional overview; confirm the current census figure before publication.</p></section>
      <section class="section leadership-section"><div class="leadership-photo"><div class="portrait-placeholder"><span>VC</span><small>PORTRAIT PLACEHOLDER</small></div></div><div class="leadership-copy"><p class="eyebrow eyebrow-dark">A note from university leadership</p><h2>A message from<br><em>the Vice-Chancellor</em></h2><p class="leadership-placeholder">Approved leadership message to be added here.</p><p class="micro-note">The current office-holder, approved wording and portrait should be confirmed before publication.</p><span class="signature-line"></span><strong>Office of the Vice-Chancellor</strong><small>University of Nottingham</small></div></section>
      <section class="section timeline-section"><div class="section-heading"><div><p class="eyebrow eyebrow-dark">A few moments in time</p><h2>From here,<br><em>out into the world.</em></h2></div><p class="section-deck">The story continues with every new question.</p></div><div class="timeline"><article><span>1881</span><div><h3>University College opens</h3><p>Teaching begins in Nottingham with a civic ambition to widen access to technical and scientific learning.</p></div></article><article><span>1948</span><div><h3>Royal Charter granted</h3><p>The University of Nottingham is established as an independent university.</p></div></article><article><span>2000</span><div><h3>Malaysia campus opens</h3><p>Students begin studying at the University’s first international campus, in Malaysia.</p></div></article><article><span>2004</span><div><h3>First students in Ningbo</h3><p>The University’s China campus welcomes its first students.</p></div></article></div></section>
      <section class="section values-section"><div class="section-heading"><div><p class="eyebrow eyebrow-dark">What we value</p><h2>Principles for<br><em>moving forward.</em></h2></div></div><div class="values-grid"><article>${icon('spark')}<h3>Excellence</h3><p>Take care with the questions and the work.</p></article><article>${icon('lightbulb')}<h3>Innovation</h3><p>Stay open to new ways of seeing and doing.</p></article><article>${icon('balance')}<h3>Integrity</h3><p>Act with honesty, rigour and respect.</p></article><article>${icon('globe')}<h3>Diversity</h3><p>Make room for perspectives beyond our own.</p></article><article>${icon('flask')}<h3>Research</h3><p>Follow evidence and share what we learn.</p></article><article>${icon('people')}<h3>Community</h3><p>Build a place where people can take part.</p></article></div></section>
    </div>`,

  accreditations: () => `
    <div class="page-wrap">
      ${pageHero('Accreditations & quality assurance','Clear standards, thoughtful review and recognition that belongs to each course.','QUALITY AT NOTTINGHAM')}
      <section class="section intro-split"><p class="eyebrow eyebrow-dark">Quality is built into the work</p><div><h2>Every course deserves<br><em>careful attention.</em></h2><p>Academic quality depends on clear learning outcomes, fair assessment and regular review. Professional recognition and external accreditation are attached to particular programmes, not automatically to every course at a university.</p><p>Check the current course listing and relevant professional body for the latest recognition, eligibility and accreditation period.</p></div></section>
      <section class="section accreditation-section"><div class="section-heading"><div><p class="eyebrow eyebrow-dark">Recognition, by programme</p><h2>Look for the details<br><em>that matter to you.</em></h2></div><p class="section-deck">These are placeholders for course-specific marks and details. No affiliation is claimed here.</p></div><div class="accreditation-grid"><article class="accred-card"><span class="accred-mark">QA</span><strong>Quality review</strong><small>Insert verified framework</small><span class="placeholder-tag">PLACEHOLDER</span></article><article class="accred-card"><span class="accred-mark">PR</span><strong>Professional recognition</strong><small>Check by programme</small><span class="placeholder-tag">PLACEHOLDER</span></article><article class="accred-card"><span class="accred-mark">BU</span><strong>Business education</strong><small>Insert verified school status</small><span class="placeholder-tag">PLACEHOLDER</span></article><article class="accred-card"><span class="accred-mark">EN</span><strong>Engineering pathways</strong><small>Check course eligibility</small><span class="placeholder-tag">PLACEHOLDER</span></article><article class="accred-card"><span class="accred-mark">HE</span><strong>Health professions</strong><small>Check regulatory requirements</small><span class="placeholder-tag">PLACEHOLDER</span></article><article class="accred-card"><span class="accred-mark">RE</span><strong>Research standards</strong><small>Insert verified review</small><span class="placeholder-tag">PLACEHOLDER</span></article></div></section>
      <section class="section standards-section"><div class="section-heading"><div><p class="eyebrow eyebrow-dark">Quality in practice</p><h2>Standards that support<br><em>good learning.</em></h2></div></div><div class="standard-list"><article><span class="standard-number">01</span>${icon('book')}<div><h3>Academic standards</h3><p>Course aims, teaching and assessment should align clearly, with transparent expectations for students.</p></div></article><article><span class="standard-number">02</span>${icon('people')}<div><h3>Student experience</h3><p>Listening to student perspectives helps a university understand what supports learning and where it can improve.</p></div></article><article><span class="standard-number">03</span>${icon('flask')}<div><h3>Research culture</h3><p>Good research depends on rigour, responsible practice and a culture where ideas can be tested and shared.</p></div></article></div></section>
      <section class="section rankings-section"><div class="section-heading"><div><p class="eyebrow eyebrow-dark">Rankings & recognition</p><h2>Useful context,<br><em>with the source attached.</em></h2></div><p class="section-deck">Rankings change by year, subject and methodology. Add only current results with a dated source.</p></div><div class="ranking-grid"><article><span class="ranking-label">GLOBAL</span><strong>—</strong><h3>Overall position</h3><p>Verified result and publication year to be added.</p></article><article><span class="ranking-label">UK</span><strong>—</strong><h3>National position</h3><p>Verified result and publication year to be added.</p></article><article><span class="ranking-label">BY SUBJECT</span><strong>—</strong><h3>Subject recognition</h3><p>Verified table, subject and methodology to be added.</p></article></div></section>
      <section class="gold-cta"><div><p class="eyebrow eyebrow-dark">Explore what you can study</p><h2>Choose a direction.<br><em>Ask better questions.</em></h2></div><a class="button button-navy" href="programs.html">Explore our programs <span aria-hidden="true">↗</span></a></section>
    </div>`,

  programs: () => `
    <div class="page-wrap">
      ${pageHero('Our programs','Follow your curiosity through undergraduate, postgraduate and research study.','STUDY AREAS')}
      <section class="section programs-section"><div class="section-heading"><div><p class="eyebrow eyebrow-dark">Browse by subject</p><h2>Find a place to<br><em>start exploring.</em></h2></div><p class="section-deck">These subject areas help you explore. Current courses, awards, entry requirements, duration and campus availability vary; confirm details on the official course finder.</p></div><div class="filter-bar" role="group" aria-label="Filter study areas"><button type="button" class="filter-pill is-active" data-filter="all" aria-pressed="true">All areas</button><button type="button" class="filter-pill" data-filter="undergraduate" aria-pressed="false">Undergraduate</button><button type="button" class="filter-pill" data-filter="postgraduate" aria-pressed="false">Postgraduate</button><button type="button" class="filter-pill" data-filter="research" aria-pressed="false">Research</button><button type="button" class="filter-pill" data-filter="online" aria-pressed="false">Online</button></div><div class="program-grid" id="program-grid">
        ${programCard('English Language Mastery','A comprehensive program designed to help learners acquire English language skills step by step, from the basics to confident daily communication.')}
        ${programCard('Professional Sales Skills','Develop your sales, negotiation, and communication skills to achieve outstanding success in marketing and sales fields.')}
        ${programCard('Professional Accounting Diploma','This diploma prepares learners to acquire advanced accounting skills in financial reporting and data analysis.')}
        ${programCard('Business Administration Diploma','A practical program aimed at developing management, planning, and marketing skills to enable professional project leadership.')}
      </div><p class="filter-empty" hidden>No study areas match this filter in this overview.</p><p class="micro-note">Programme names, qualification types and delivery modes are illustrative subject pathways. Check current official listings before applying.</p><div class="button-row centered"><a class="button button-navy" href="programs.html">Browse all programs <span aria-hidden="true">↗</span></a></div></section>
      <section class="section application-section"><div class="section-heading"><div><p class="eyebrow eyebrow-dark">How to apply</p><h2>Three steps to<br><em>your next chapter.</em></h2></div><p class="section-deck">Entry routes and deadlines differ by course and applicant type. Always use the current official guidance.</p></div><div class="steps-grid"><article><span>01</span>${icon('compass')}<h3>Choose a course</h3><p>Compare the subject, campus, entry requirements and application route.</p></article><article><span>02</span>${icon('send')}<h3>Prepare your application</h3><p>Gather the documents and information listed for your chosen course.</p></article><article><span>03</span>${icon('mail')}<h3>Follow your offer</h3><p>Check your applicant portal and respond by the date shown in your offer.</p></article></div></section>
      <section class="scholarship-band"><div><p class="eyebrow eyebrow-dark">Planning your next step</p><h2>Scholarships &<br><em>financial support.</em></h2><p>Funding, eligibility and application dates vary. Check current options with the University before making plans.</p></div><a class="button button-navy" href="programs.html">Explore study areas <span aria-hidden="true">↗</span></a></section>
      <section class="section faq-section"><div class="section-heading"><div><p class="eyebrow eyebrow-dark">A few useful answers</p><h2>Before you<br><em>get started.</em></h2></div></div><div class="faq-list"><details><summary>Where can I check current courses and entry requirements?<span>+</span></summary><p>Use the University’s official course finder for current course pages, entry requirements, locations and application details.</p></details><details><summary>How long does a degree take?<span>+</span></summary><p>Duration depends on the specific course, study mode, placement or year abroad options, and campus. Check the course page for the exact structure.</p></details><details><summary>Can I study at more than one campus?<span>+</span></summary><p>Some programmes may offer opportunities to study across campuses. Availability and eligibility depend on the course, so confirm with its current listing.</p></details><details><summary>Are scholarships available?<span>+</span></summary><p>Funding opportunities can change by year and applicant group. Review current University guidance and note each award’s eligibility and closing date.</p></details><details><summary>What is the difference between taught and research study?<span>+</span></summary><p>Taught courses usually combine structured modules with independent work. Research degrees focus on an original project supervised by academic staff.</p></details></div></section>
    </div>`,

  why: () => `
    <div class="page-wrap">
      ${pageHero('Why choose Nottingham?','A long history of asking what knowledge can make possible — in a city, across countries and beyond.','WHY NOTTINGHAM')}
      <section class="section differentiators"><div class="feature-story"><div class="story-image story-image-tall"><img src="assets/research.jpg" alt="Collaborators working through a research question"><span>01 / IDEAS INTO ACTION</span></div><div class="story-copy"><p class="eyebrow eyebrow-dark">Research with reach</p><h2>Start with a question.<br><em>Follow the evidence.</em></h2><p>Research spans disciplines, from health and engineering to climate, culture and society. Explore how teams connect deep subject knowledge with the questions people are asking now.</p><a class="text-link" href="why-us.html">Explore research at Nottingham <span>↗</span></a></div></div>
        <div class="feature-story story-reverse"><div class="story-image"><img src="assets/trent-building.jpg" alt="Trent Building at University Park campus in Nottingham"><span>02 / A CONNECTED UNIVERSITY</span></div><div class="story-copy"><p class="eyebrow eyebrow-dark">A global campus network</p><h2>Three countries.<br><em>Many perspectives.</em></h2><p>Nottingham’s university community is connected across the UK, Malaysia and China. Each place offers its own setting, culture and opportunities to learn.</p><a class="text-link" href="#global-presence">Find the campuses <span>↗</span></a></div></div>
        <div class="feature-story"><div class="story-image"><img src="assets/students.jpg" alt="Students collaborating in a library; illustrative stock photography"><span>03 / LEARNING WITH OTHERS</span></div><div class="story-copy"><p class="eyebrow eyebrow-dark">Ideas meet experience</p><h2>Learn alongside<br><em>the wider world.</em></h2><p>Projects, placements and community work can bring study into contact with practical challenges. The opportunities available depend on your course and stage of study.</p><a class="text-link" href="programs.html">Explore study areas <span>↗</span></a></div></div>
        <div class="feature-story story-reverse"><div class="support-visual"><span class="support-icon">${icon('people')}</span><span class="support-caption">FIND YOUR<br>PEOPLE</span><div class="support-bubble bubble-one">Ask</div><div class="support-bubble bubble-two">Make</div><div class="support-bubble bubble-three">Grow</div></div><div class="story-copy"><p class="eyebrow eyebrow-dark">Support along the way</p><h2>There’s more than<br><em>one way to belong.</em></h2><p>Student societies, sport, accommodation, wellbeing and careers services can help make a university feel like a community. Find the support that fits you.</p><a class="text-link" href="student-reviews.html">Hear student perspectives <span>↗</span></a></div></div>
      </section>
      <section class="numbers-band"><p class="eyebrow">A few points on the map</p><div class="number-ribbon"><div><strong>1881</strong><span>our roots</span></div><div><strong>3</strong><span>countries with campuses</span></div><div><strong>2</strong><span>international campuses</span></div><div><strong>40K<span>+</span></strong><span>students across the community</span></div></div><p class="data-note">The approximate student figure is a general institutional overview; confirm the latest official census before publication.</p></section>
      <section class="section global-section" id="global-presence"><div class="section-heading"><div><p class="eyebrow eyebrow-dark">Connected across borders</p><h2>Three campus locations.<br><em>One wider community.</em></h2></div><p class="section-deck">Nottingham in the UK, Semenyih in Malaysia and Ningbo in China.</p></div><div class="map-card"><div class="map-copy"><span class="map-kicker">A UNIVERSITY WITHOUT ONE VIEWPOINT</span><h3>Learn in a place<br>that broadens<br>the picture.</h3><p>Campus mobility depends on your programme and eligibility. Check current options with your school.</p></div><div class="map-graphic"><svg class="map-shape" viewBox="0 0 700 360" role="img" aria-label="Abstract map showing University of Nottingham campus locations in the UK, Malaysia and China"><path d="M90 99 126 71l31 8 14 24 29 5 13 25-12 18-31 7-14 30-25-5-8-25-26-15 7-22-25-22Zm155 42 25-13 23 9 5 22-16 12 3 27-22 12-12-17 7-20-13-15Zm89-56 20-18 42 1 18 14 38-5 27 20 30 2 9 19-18 12-20-4-12 21-26 2-14 20-28-3-16-17-25-3-10-22-22-4-13-16 10-19Zm106 100 23-6 25 16 7 23-14 18-24-7-17-23Zm-288 62 28-12 30 7 12 16-11 13-32-3-23-9Zm121 18 20-8 32 11 12 20-19 14-29-7-16-14Z" fill="currentColor" opacity=".15"/><path d="M145 121 C270 40 392 80 511 178" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 8" opacity=".38"/><path d="M145 121 C250 200 370 222 511 178" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 8" opacity=".38"/></svg><div class="map-pin pin-uk"><span></span><strong>UK</strong><small>Nottingham</small></div><div class="map-pin pin-my"><span></span><strong>Malaysia</strong><small>Semenyih</small></div><div class="map-pin pin-cn"><span></span><strong>China</strong><small>Ningbo</small></div><span class="map-label">CONNECTED CAMPUSES · SHARED CURIOSITY</span></div></div></section>
      <section class="section partners-section"><div class="section-heading"><div><p class="eyebrow eyebrow-dark">Working beyond campus</p><h2>Partnerships begin<br><em>with a shared question.</em></h2></div><p class="section-deck">Partner names and logos require current approval. This panel shows areas for a verified partner directory.</p></div><div class="partner-grid"><span>HEALTH</span><span>ENERGY</span><span>TECHNOLOGY</span><span>PUBLIC SERVICE</span><span>MANUFACTURING</span><span>CREATIVE INDUSTRIES</span><span>EDUCATION</span><span>COMMUNITY</span></div><p class="micro-note">Sector labels are categories, not named or confirmed partner relationships.</p></section>
      <section class="section life-section"><div class="section-heading"><div><p class="eyebrow eyebrow-dark">Beyond the lecture theatre</p><h2>Build a life<br><em>around your learning.</em></h2></div></div><div class="feature-grid three-up"><article class="feature-card"><div class="card-top"><span class="number-mark">01</span>${icon('home')}</div><h3>Make a home</h3><p>Explore accommodation options and support for settling into university life.</p><a class="card-link" href="why-us.html">Accommodation <span>↗</span></a></article><article class="feature-card feature-card-ink"><div class="card-top"><span class="number-mark">02</span>${icon('people')}</div><h3>Find your people</h3><p>Discover student societies, sport, volunteering and spaces to share what you love.</p><a class="card-link" href="student-reviews.html">Students’ Union <span>↗</span></a></article><article class="feature-card feature-card-gold"><div class="card-top"><span class="number-mark">03</span>${icon('arrow')}</div><h3>Plan what comes next</h3><p>Find careers guidance and opportunities to build skills during your studies.</p><a class="card-link" href="why-us.html">Careers support <span>↗</span></a></article></div></section>
      <section class="testimonial-large"><p class="eyebrow">A student perspective</p><p class="testimonial-summary">Hoo Ji describes how invitations from classmates helped him settle into a new culture and grow more confident.</p><div class="testimonial-person"><span class="avatar avatar-outline">HH</span><span><strong>Hoo Ji Han</strong><small>Engineering student · University of Nottingham Malaysia</small></span></div></section>
      <section class="cta-band"><div><p class="eyebrow eyebrow-dark">A good place to start</p><h2>Come curious.<br><em>Leave changed.</em></h2></div><div class="button-row"><a class="button button-navy" href="programs.html">Explore programs <span aria-hidden="true">↗</span></a><a class="button button-outline-navy" href="about.html">Discover our campuses <span aria-hidden="true">↗</span></a></div></section>
    </div>`,

  reviews: () => `
    <div class="page-wrap">
      ${pageHero('What our students say','Real perspectives from people who have studied, volunteered and made connections at Nottingham.','STUDENT VOICES')}
      <section class="section rating-section"><div class="rating-card"><div class="rating-main"><span class="eyebrow eyebrow-dark">A university-wide score</span><strong>—<small>/5</small></strong><span class="rating-pending">Verified rating not supplied</span></div><div class="rating-details"><h2>Student experience<br><em>is more than a number.</em></h2><p>No comparable University-wide rating or review count is shown in this concept. The voices below link to published University or Students’ Union stories.</p><div class="score-bars"><div><span>Teaching quality</span><i></i><small>Survey data needed</small></div><div><span>Campus life</span><i></i><small>Survey data needed</small></div><div><span>Career support</span><i></i><small>Survey data needed</small></div></div></div></div></section>
      <section class="section featured-reviews"><div class="section-heading"><div><p class="eyebrow eyebrow-dark">Across the campuses</p><h2>Different routes.<br><em>Shared discoveries.</em></h2></div><p class="section-deck">Stories below are summaries of published student features. Names and course labels follow their linked sources.</p></div><div class="review-feature-grid">
        <article class="review-feature"><div class="review-photo portrait-placeholder portrait-gold"><span>ZY</span><small>PHOTO PLACEHOLDER</small></div><div class="review-feature-body"><div class="stars" aria-label="Published student story, no star rating assigned">✦ <span>STUDENT STORY</span></div><blockquote>“The courses across the three campuses are coherent.”</blockquote><p>Zhuojun’s semester in Malaysia connected her studies with new regional perspectives and friendships across campuses.</p><div class="review-person"><strong>Zhuojun Yu</strong><span>Finance, Accounting and Management</span></div></div></article>
        <article class="review-feature"><div class="review-photo portrait-placeholder portrait-blue"><span>HH</span><small>PHOTO PLACEHOLDER</small></div><div class="review-feature-body"><div class="stars" aria-label="Published student story, no star rating assigned">✦ <span>STUDENT STORY</span></div><blockquote>“People were more welcoming than I expected.”</blockquote><p>After starting in Malaysia, Hoo Ji spent a year at the UK campus and describes how the move broadened his confidence and outlook.</p><div class="review-person"><strong>Hoo Ji Han</strong><span>Engineering</span></div></div></article>
        <article class="review-feature"><div class="review-photo portrait-placeholder portrait-rose"><span>ST</span><small>PHOTO PLACEHOLDER</small></div><div class="review-feature-body"><div class="stars" aria-label="Published student story, no star rating assigned">✦ <span>STUDENT STORY</span></div><blockquote>“I already knew I wanted to go overseas.”</blockquote><p>Sabrina’s move from Malaysia to Nottingham brought new friendships, volunteering and a different view of everyday life.</p><div class="review-person"><strong>Sabrina Tai Yiqian</strong><span>Psychology</span></div></div></article>
      </div></section>
      <section class="section review-grid-section"><div class="section-heading"><div><p class="eyebrow eyebrow-dark">Small moments, lasting connections</p><h2>Student voices<br><em>from the community.</em></h2></div></div><div class="review-grid">
        <article><div class="stars" aria-label="Published testimonial, no star rating assigned">✦ <span>GLOBAL BUDDIES</span></div><blockquote>“I really enjoyed connecting with different people.”</blockquote><div class="review-person"><strong>Aashna K.</strong><span>Global Buddies volunteer</span></div></article>
        <article><div class="stars" aria-label="Published testimonial, no star rating assigned">✦ <span>GLOBAL BUDDIES</span></div><blockquote>“Make friends around the world.”</blockquote><div class="review-person"><strong>Guanzhong W.</strong><span>Global Buddies volunteer</span></div></article>
        <article><div class="stars" aria-label="Published testimonial, no star rating assigned">✦ <span>GLOBAL BUDDIES</span></div><blockquote>“Connecting with new people was really fun.”</blockquote><div class="review-person"><strong>Amani C.</strong><span>Global Buddies volunteer</span></div></article>
        <article><div class="stars" aria-label="Published student story, no star rating assigned">✦ <span>GLOBAL CAMPUSES</span></div><p class="review-summary">A semester in Malaysia connected regional knowledge with new campus friendships.</p><div class="review-person"><strong>Zhuojun Yu</strong><span>Finance, Accounting and Management</span></div></article>
        <article><div class="stars" aria-label="Published student story, no star rating assigned">✦ <span>GLOBAL CAMPUSES</span></div><p class="review-summary">A year in Nottingham opened up Hoo Ji’s confidence and international outlook.</p><div class="review-person"><strong>Hoo Ji Han</strong><span>Engineering</span></div></article>
        <article><div class="stars" aria-label="Published student story, no star rating assigned">✦ <span>GLOBAL CAMPUSES</span></div><p class="review-summary">Moving abroad brought new friendships, volunteering and a wider view of everyday life.</p><div class="review-person"><strong>Sabrina Tai Yiqian</strong><span>Psychology</span></div></article>
      </div></section>
      <section class="section video-section"><div class="section-heading"><div><p class="eyebrow eyebrow-dark">Hear it in their own words</p><h2>Video stories<br><em>to come.</em></h2></div><p class="section-deck">Approved student footage can be placed here. These cards are not playable videos.</p></div><div class="video-grid"><button class="video-card" type="button" data-toast="Approved student video placeholder — no video is connected yet."><span class="video-still still-campus"><span class="play-button">▶</span><span class="placeholder-tag">VIDEO PLACEHOLDER</span></span><strong>Life across campuses</strong><small>Student story · footage to be added</small></button><button class="video-card" type="button" data-toast="Approved student video placeholder — no video is connected yet."><span class="video-still still-library"><span class="play-button">▶</span><span class="placeholder-tag">VIDEO PLACEHOLDER</span></span><strong>Finding your people</strong><small>Student story · footage to be added</small></button><button class="video-card" type="button" data-toast="Approved student video placeholder — no video is connected yet."><span class="video-still still-research"><span class="play-button">▶</span><span class="placeholder-tag">VIDEO PLACEHOLDER</span></span><strong>Learning by doing</strong><small>Student story · footage to be added</small></button></div></section>
      <section class="section review-numbers"><div class="section-heading"><div><p class="eyebrow eyebrow-dark">The numbers behind the stories</p><h2>What we can say<br><em>with confidence.</em></h2></div></div><div class="review-number-grid"><div><strong>6</strong><span>source-linked student excerpts in this concept</span></div><div><strong>3</strong><span>countries represented by campus locations</span></div><div><strong>—</strong><span>current university-wide satisfaction figure</span></div><div><strong>—</strong><span>would-recommend survey result</span></div></div><p class="micro-note">Add published survey results only with the reporting year, population and source.</p></section>
      
    </div>`
};

const navItems = [
  ['home', 'Home', 'index.html', 'home'],
  ['about', 'About', 'about.html', 'book'],
  ['accreditations', 'Accreditations', 'accreditations.html', 'award'],
  ['programs', 'Programs', 'programs.html', 'grid'],
  ['why', 'Why us', 'why-us.html', 'spark'],
  ['reviews', 'Student Reviews', 'student-reviews.html', 'quote']
];

const iconPaths = {
  home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="m8.2 13-1.2 9 5-2.5 5 2.5-1.2-9"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  spark: '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"/>',
  quote: '<path d="M3 21c3 0 5-2 5-5V5H3v7h3c0 2-1 3-3 3v6Zm11 0c3 0 5-2 5-5V5h-5v7h3c0 2-1 3-3 3v6Z"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  flask: '<path d="M9 3h6M10 3v6l-5.4 8.8A2.1 2.1 0 0 0 6.4 21h11.2a2.1 2.1 0 0 0 1.8-3.2L14 9V3"/><path d="M8 15h8"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m16 8-2.5 5.5L8 16l2.5-5.5L16 8Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>',
  lightbulb: '<path d="M9 18h6m-5 4h4m-2-20a7 7 0 0 0-4 12.7c.6.4 1 1.1 1 1.8h6c0-.7.4-1.4 1-1.8A7 7 0 0 0 12 2Z"/>',
  balance: '<path d="M12 3v18m-7 0h14M5 7h14M5 7l-3 6h6L5 7Zm14 0-3 6h6l-3-6Z"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
  people: '<path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9.5" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  code: '<path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-11-2 14"/>',
  briefcase: '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-13 5h18m-11 0v2h4v-2"/>',
  heart: '<path d="M20.8 8.8c0 5.3-8.8 11.2-8.8 11.2S3.2 14.1 3.2 8.8A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z"/>',
  chart: '<path d="M3 3v18h18M8 15l4-4 3 3 6-7"/>',
  send: '<path d="m22 2-7 20-4-9-9-4 20-7ZM22 2 11 13"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  homeIcon: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>'
};

function icon(name) {
  return `<svg class="line-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${iconPaths[name] || iconPaths.spark}</svg>`;
}

function castleMark(className = '') {
  return `<svg class="castle-mark ${className}" viewBox="0 0 54 58" aria-hidden="true"><path d="M8 52V27h8v-9h8v9h7V13h8v14h7v25H8Z"/><path d="M4 52h46M8 27h37M12 35h5v6h-5zm12 0h5v6h-5zm13 0h5v6h-5zm-10 17V42h9v10"/></svg>`;
}

function pageHero(title, subtitle, label) {
  return `<header class="page-hero"><div class="page-hero-copy"><p class="eyebrow"><span class="eyebrow-dot"></span>${label}</p><h1>${title}</h1><p>${subtitle}</p></div><div class="page-hero-art"><span class="hero-art-word">NOTTING<br>HAM</span>${castleMark('hero-castle')}<span class="page-hero-index">U · N / 1881</span></div><span class="hero-diagonal" aria-hidden="true"></span></header>`;
}

function programCard(title, description) {
  return `<article class="program-card" data-categories=""><h3>${title}</h3><p>${description}</p></article>`;
}

const nav = document.getElementById('site-nav');
const pageKey = document.body.dataset.page || 'home';
const pageTitles = { home: 'Home', about: 'About', accreditations: 'Accreditations', programs: 'Programs', why: 'Why us', reviews: 'Student voices' };
const pagePaths = { home: 'index.html', about: 'about.html', accreditations: 'accreditations.html', programs: 'programs.html', why: 'why-us.html', reviews: 'student-reviews.html' };

nav.innerHTML = `<a class="sidebar-brand" href="index.html" aria-label="University of Nottingham home">${castleMark()}<span>THE UNIVERSITY<br><strong>OF NOTTINGHAM</strong></span></a><span class="nav-label">EXPLORE</span><nav>${navItems.map(([key, label, href, glyph]) => `<a class="nav-link ${pageKey === key ? 'is-current' : ''}" href="${href}" ${pageKey === key ? 'aria-current="page"' : ''}>${icon(glyph)}<span>${label}</span>${pageKey === key ? '<i></i>' : ''}</a>`).join('')}</nav><div class="sidebar-bottom"><div class="sidebar-note"><span class="note-star">✳</span><p>Curious minds<br>make a difference.</p></div><a class="sidebar-cta" href="programs.html">Find your course <span>↗</span></a><span class="sidebar-foot">NOTTINGHAM · MALAYSIA · CHINA</span></div>`;

document.getElementById('main-content').innerHTML = (pages[pageKey] || pages.home)();

document.getElementById('site-footer').innerHTML = `<div class="footer-main"><div class="footer-brand">${castleMark()}<span>THE UNIVERSITY<br><strong>OF NOTTINGHAM</strong></span><p>Knowledge moves us forward.</p></div><div class="footer-column"><strong>Explore</strong><a href="about.html">About us</a><a href="programs.html">Study areas</a><a href="accreditations.html">Quality & accreditation</a><a href="why-us.html">Why Nottingham</a></div></div><div class="footer-bottom"><span>© University of Nottingham · Concept website</span><span>Photography: University of Nottingham and Unsplash</span><a href="#main-content">Back to top ↑</a></div>`;

const menuToggle = document.querySelector('.menu-toggle');
const themeButton = (mobile = false) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `theme-toggle${mobile ? ' theme-toggle-mobile' : ''}`;
  button.dataset.themeToggle = '';
  button.innerHTML = '<span class="theme-toggle-icon" aria-hidden="true">☾</span><span class="theme-toggle-label">Dark mode</span>';
  return button;
};
const sidebarThemeButton = themeButton();
const mobileThemeButton = themeButton(true);
nav.querySelector('.sidebar-foot')?.before(sidebarThemeButton);
menuToggle?.before(mobileThemeButton);
const themeButtons = [...document.querySelectorAll('[data-theme-toggle]')];
function setTheme(theme, persist = true) {
  const nextTheme = theme === 'dark' ? 'dark' : 'light';
  document.body.dataset.theme = nextTheme;
  themeButtons.forEach(button => {
    const action = nextTheme === 'dark' ? 'light' : 'dark';
    const label = action === 'dark' ? 'Dark mode' : 'Light mode';
    button.setAttribute('aria-label', `Switch to ${label.toLowerCase()}`);
    button.title = `Switch to ${label.toLowerCase()}`;
    button.querySelector('.theme-toggle-icon').textContent = action === 'dark' ? '☾' : '☀';
    button.querySelector('.theme-toggle-label').textContent = label;
  });
  if (persist) {
    try { localStorage.setItem('nottingham-theme', nextTheme); } catch {}
  }
}
let savedTheme = 'light';
try {
  const storedTheme = localStorage.getItem('nottingham-theme');
  if (storedTheme === 'dark' || storedTheme === 'light') savedTheme = storedTheme;
} catch {}
setTheme(savedTheme, false);
themeButtons.forEach(button => button.addEventListener('click', () => {
  setTheme(document.body.dataset.theme === 'dark' ? 'light' : 'dark');
}));

menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('nav-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('nav-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.setAttribute('aria-label', 'Open navigation');
}));

document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  const cards = [...document.querySelectorAll('.program-card')];
  let visible = 0;
  document.querySelectorAll('[data-filter]').forEach(pill => {
    const active = pill === button;
    pill.classList.toggle('is-active', active);
    pill.setAttribute('aria-pressed', String(active));
  });
  cards.forEach(card => {
    const show = filter === 'all' || card.dataset.categories.split(' ').includes(filter);
    card.hidden = !show;
    if (show) visible++;
  });
  const empty = document.querySelector('.filter-empty');
  if (empty) empty.hidden = visible > 0;
}));

function announce(message) {
  const toast = document.querySelector('.toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => toast.classList.remove('show'), 4200);
}

document.querySelectorAll('[data-toast]').forEach(button => button.addEventListener('click', () => announce(button.dataset.toast)));
const prefersLessMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.body.classList.add('page-ready');

if (!prefersLessMotion) {
  const revealSelector = [
    '.home-hero .hero-copy > *:not(h1)', '.hero-visual', '.page-hero-copy > *:not(h1)', '.page-hero-art',
    '.stat-item', '.section-heading', '.feature-card', '.news-card', '.voice-banner', '.vision-card',
    '.timeline article', '.values-grid article', '.accred-card', '.standard-list article', '.ranking-grid article',
    '.program-card', '.steps-grid article', '.story-image', '.story-copy', '.map-card', '.partner-grid span',
    '.testimonial-large', '.review-feature', '.review-grid article', '.video-card', '.review-number-grid > div',
    '.cta-band', '.gold-cta', '.scholarship-band', '.leadership-photo', '.leadership-copy',
    '.application-section', '.footer-main'
  ].join(',');
  const revealTargets = [...document.querySelectorAll(revealSelector)];
  revealTargets.forEach((element, index) => {
    element.classList.add('motion-reveal');
    element.style.setProperty('--reveal-delay', `${(index % 5) * 65}ms`);
    if (element.matches('.story-image, .overview-image, .leadership-photo, .hero-visual')) element.classList.add('motion-from-left');
    else if (element.matches('.story-copy, .leadership-copy')) element.classList.add('motion-from-right');
    else if (element.matches('.review-feature, .accred-card, .video-card')) element.classList.add('motion-from-scale');
  });

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('motion-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -34px 0px' });
    revealTargets.forEach(element => revealObserver.observe(element));
  } else {
    revealTargets.forEach(element => element.classList.add('motion-visible'));
  }
}

const countTargets = [...document.querySelectorAll('.stat-item strong, .stats-panel-grid strong, .number-ribbon strong, .review-number-grid strong')];
function runCountUp(element) {
  if (element.dataset.counted === 'true') return;
  const original = element.textContent.trim().replace(/\s/g, '');
  const match = original.match(/^([\d,]+)(K)?(\+)?$/);
  if (!match) return;
  element.dataset.counted = 'true';
  const target = Number(match[1].replace(/,/g, ''));
  const suffix = `${match[2] || ''}${match[3] || ''}`;
  const write = value => {
    const formatted = Math.round(value).toLocaleString('en-GB');
    element.innerHTML = `${formatted}${suffix ? `<span>${suffix}</span>` : ''}`;
  };
  if (prefersLessMotion || !('requestAnimationFrame' in window)) { write(target); return; }
  const startTime = performance.now();
  const duration = 1250;
  const frame = now => {
    const progress = Math.min(1, (now - startTime) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    write(target * eased);
    if (progress < 1) requestAnimationFrame(frame);
  };
  write(0);
  requestAnimationFrame(frame);
}

if ('IntersectionObserver' in window && !prefersLessMotion) {
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      runCountUp(entry.target);
      counterObserver.unobserve(entry.target);
    });
  }, { threshold: 0.45 });
  countTargets.forEach(element => counterObserver.observe(element));
} else {
  countTargets.forEach(runCountUp);
}
