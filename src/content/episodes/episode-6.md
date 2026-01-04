---
layout: ../../layouts/Base.astro
title: "Is Healthcare Data any good? | Data with Duke Ep.6"
slug: "health-data"
date: 2026-01-03
summary: "Welcome back! In this episode, I explain my slightly (hopefully) forgivable absence with a short dive into Health Data.Throughout the episode, we discuss: Why is health data so valuable? How can it go so well sometimes and others... not so much. A short intro into the fabled Google Flu Trends case study. How the UK actually did good on some health data.The risks with health data including the minefield of ethics"
tags: ["data podcast", "data with duke", "health data", "nhs data", "google flu trends", "health wearables", "apple watch", "data literacy", "data organisation", "clean data", "spreadsheets", "excel tips", "google sheets", "data governance", "data culture", "data quality", "data cleaning", "data management", "everyday data", "data careers", "educational podcast", "tech podcast"]
youtubeId: "R6yGGVa-VUM"
---
## Watch the video on YouTube
[![Watch the video](https://img.youtu.be/R6yGGVa-VUM/0.jpg)](https://youtu.be/R6yGGVa-VUM)

---

# Episode 6 – Health data isn't THAT important...right??

---

## Transcript

### Intro

Hello and welcome back to **Data with Duke** — the show where we take all things data, boil them gently for 20 minutes, season with sarcasm, and serve piping hot insights that even your nan could understand.

And to those who noticed… yep. I’ve been away for a few weeks. You’re absolutely right. I’ve been ill — *proper* ill. The sort of ill where even your dog looks at you like, “Mate… pull yourself together.”

I spent about a fortnight (maybe three weeks) in the biological equivalent of a Windows 95 error screen, and it got me thinking: let’s do an episode about **health data** — the good, the bad, and the embarrassingly optimistic.

I actually prepared this episode weeks ago… and then Christmas happened. Which, as we know, requires planning, logistics, and alcohol. Now it’s early January, I’m still not 100%, but I’m upright and vaguely coherent — so let’s do this.

Quick note: I’ll probably do another episode next week (or the week after) about **New Year’s resolutions**, so send yours in. Drop a comment, contact me through the website… whatever works.

Right. Back to the one I actually prepared.

Today we’re talking about **how data is used in health in the UK and around the world**. We’ll cover heroic success stories, catastrophic failures, and Google’s brave-but-dodgy attempt at becoming Dr House.

That’s right: **Google Flu Trends is back, baby.**

So grab your Lemsip, buckle up, and let’s talk about the times data has saved lives… and the times it quietly ruins somebody’s afternoon.

---

### Health data: what it is and why it matters

Let’s start with the basics — or, in other words, why doctors love spreadsheets as much as… systems. Symptoms. I meant symptoms. But honestly, both.

Health data is everywhere. If data had a Tinder profile, the NHS alone would be swiping right so fast it would get carpal tunnel.

We’re talking:

* Electronic health records
* Hospital Episode Statistics
* Public health surveillance
* Genomic sequencing
* Wearables… including the Fitbit you bought in 2019 and haven’t charged since

In the UK, the NHS is one of the world’s largest, slightly creaky, semi-magical data systems. Millions of interactions create data: appointments, prescriptions, X-rays, A&E visits, and the occasional “I accidentally swallowed a keyring” story.

Globally, health data helps governments identify outbreaks, plan vaccination programmes, predict winter pressures, and work out whether Karen’s symptoms mean she’s allergic to gluten… or whether she just needs a glass of water and to stop Googling things at 3am.

But the big story — the one that really defines what happens when data gets above its station — is **Google Flu Trends**.

---

### Google Flu Trends: Big Data meets Big Oopsie

I’ll link some good blogs and research papers in the show notes on **datawithduke.com**, because if you’re into big data case studies, this is one of the best you’ll ever find.

We need to go back to **2008**. Barack Obama has just been elected, everyone’s wearing oversized belts, and Google decides it wants to predict flu outbreaks using search data.

This is before ChatGPT, before Gemini, and even before Google autocomplete became the mind-reading menace we all know today.

The idea was simple: if loads of people in a region start searching things like:

* “flu symptoms”
* “why do I feel like death”
* “how long can a human survive on Lemsip alone”

…then maybe there’s a flu outbreak happening right now. And crucially, maybe we can detect it **faster than traditional systems**.

Back then, outbreak detection relied heavily on the slow stuff: GPs, pharmacies, and public health reporting. By the time it got escalated, half the country had already sneezed their way through it.

So Google built [**Google Flu Trends (GFT)**](https://www.google.org/flutrends/about/) — a model that looked at search patterns and estimated flu prevalence. It was supposed to be faster than traditional surveillance, and for a while…

…it actually worked.

Between **2008 and 2011**, GFT tracked flu trends surprisingly well — often quicker than the CDC. Everyone clapped. Headlines screamed “Big Data will replace epidemiologists!”

Somewhere, a thousand statistics professors sighed into their coffee.

GFT became the shiny new toy of digital epidemiology.

And then, like most shiny toys, it got dropped down the stairs.

---

### So what went wrong?

Around **2012–2013**, GFT started massively **overestimating flu cases** — in some cases, double (or more) than reality.

Why?

Because **search behaviour does not equal illness**.

People Google weird things:

* out of concern
* because someone coughed on the bus
* because WebMD has convinced them they’ve got 15 minutes to live

This is a perfect “correlation vs causation” case study. People searching “flu” doesn’t mean people *have* flu.

But the funniest part is this:

**Google broke Google Flu Trends by updating Google.**

In 2012, Google expanded autocomplete and personalised suggestions. Suddenly, typing “why is my nose…” could autocomplete into “running flu symptoms death imminent click here”.

And if you’ve never played the Google Autocomplete game, I recommend it. One rainy Sunday afternoon, try typing:

* “why is my girlfriend…”
* “why is my boyfriend…”

It’s either comedy gold or a reason to never go online again.

But here’s the point: autocomplete caused searches for flu-related terms to spike artificially. GFT didn’t know Google had changed; it just assumed flu had gone nuclear.

And this is where big data often goes wrong: **correlations can appear by accident**.

One famous example was that search terms like “high school basketball” ended up highly correlated with flu. Not because basketball gives you flu — but because basketball season overlaps with winter.

GFT didn’t understand context. It just saw patterns and made confident guesses.

Another problem: the model wasn’t being updated often enough. Google invested a lot, but not enough to keep it properly maintained.

Big data is like milk: great when it’s fresh, tragic when it’s not.

In the 2013 flu season, GFT overestimated peak flu cases by **over 140%**. It went from poster child of “big data will save the world” to poster child of **data hubris**.

And then, in 2015, [Google Flu Trends was quietly discontinued.](https://doi.org/10.1126/science.1248506) No dramatic apology blog post. It just… stopped.

Like a sad goldfish.

---

### Why does Google Flu Trends still matter?

Because it taught us some brutal lessons:

* Big data can’t replace traditional public health systems
* Search behaviour is influenced by platform design, media, and trends
* Models break when the world — or the input system — changes
* If your model relies on autocomplete, maybe don’t stake epidemiology on it

Still, as failures go, it’s educational… and strangely lovable. It’s one of those case studies that data scientists will be pointing at forever.

---

### UK health data wins: COVID-19 (yes, but the data bit)

Right. I want to talk about something closer to home, because not everything is on fire.

And yes, I’m going to mention COVID — but don’t turn me off yet. We’re focusing on **the data**, not the politics, and definitely not the “sing Happy Birthday while washing your hands” trauma.

During the COVID pandemic, the UK became a global leader in a few major data areas.

#### Genomic sequencing

The [UK sequenced a huge number of SARS-CoV-2 samples](https://www.england.nhs.uk/statistics/facts-and-figures/) early on, helping identify variants earlier than many nations. That meant faster insight into what was spreading, how it was changing, and what symptoms were shifting.

#### The COVID dashboard

[The colour-coded national obsession.](https://coronavirus.data.gov.uk/)

It became one of the most comprehensive public pandemic data portals in the world: daily updates, regional breakdowns, cases, hospitalisations, vaccinations, deaths. Not perfect — but building something that fast, that visible, updated daily… that’s not a small feat.

#### The RECOVERY trial

[Run by Oxford](https://www.recoverytrial.net/), this was one of the fastest and largest clinical trials in history, using adaptive trial design.

It identified treatments that genuinely improved outcomes — and ruled out others that were being loudly promoted by people who were, let’s say, not especially qualified.

Whatever your overall view of the response, from a data perspective the UK contributed massively — and that insight saved lives worldwide.

---

### Wearables and remote monitoring

Now let’s talk about wearables.

How many of you have got an Apple Watch, Fitbit, Samsung Watch, Google Watch… something along those lines?

These devices produce real-time data:

* Heart rhythm notifications
* Glucose monitoring for diabetes
* Blood oxygen sensors for respiratory issues
* Sleep tracking (which I personally use)

Someone close to me first discovered they were experiencing arrhythmia because their Apple Watch told them. [That’s not a gimmick — that’s early warning.](https://med.stanford.edu/appleheartstudy.html)

Do wearables know your heart rate better than you do? Absolutely.
Do they also occasionally panic because you walked up the stairs too fast? Also yes.

They won’t replace doctors, but they can support early detection — [and we’ll see more of this in the coming years.](https://www.fitbit.com/global/us/research)

---

### Genomics and personalised medicine

Think of things like:

* ancestry DNA tests
* 23andMe
* population sequencing projects

[Sequencing can help identify hereditary risk](https://www.genomicsengland.co.uk/initiatives/100000-genomes-project) and diagnose rare diseases earlier — sometimes years earlier than symptoms appear.

Outside the UK, Iceland’s deCODE genetics is a well-known example of long-term population genomics research. Iceland also tends to show strong health outcomes — not purely because of data, obviously, but it certainly helps.

---

### Wastewater surveillance: yes, it’s gross, but it’s genius

Stick with me.

[Some countries analyse wastewater](https://www.cdc.gov/nwss/) to track levels of diseases like COVID, flu, RSV, norovirus, and even polio.

That’s right: your toilet flush is now a public health instrument.

No, you cannot opt out.

---

### When health data goes wrong

Of course, it’s not all success stories.

#### NHS data sharing and public trust

Around 2013, [there was a plan to link GP records with hospital data](https://publications.parliament.uk/pa/cm201516/cmselect/cmhealth/328/328.pdf) to support research and reduce fragmentation.

Sounds great… except the public felt blindsided. People panicked about privacy, and the project was eventually pulled.

Moral of the story: if you surprise the British public with *anything* — even improved healthcare — we will revolt.

#### IBM Watson (the cancer diagnosis AI)

Watson was designed to support oncology decisions, but in testing it sometimes produced unsafe or incorrect recommendations. Eventually, doctors quietly asked it to leave the room.

#### Algorithmic bias

This one matters.

[Healthcare algorithms have been found to underestimate disease risk in minority groups](https://www.science.org/doi/10.1126/science.aax2342), often because training data doesn’t represent the population properly.

Bias isn’t a “whoops, try again” situation in healthcare. It can lead to underdiagnosis, wrong prioritisation, and systemic inequality — with deadly consequences.

Ethics in health data isn’t optional. It’s the whole game.

---

### Why health data is so valuable… and so messy

Health data is gold dust because it’s:

* personal
* predictive
* useful for planning and cost reduction
* powerful for research and treatment discovery

But it’s also messy because it’s:

* fragmented across systems
* inconsistent
* ethically sensitive
* full of missing values
* entered by tired humans at 4am after a double shift

Health data can be the dream dataset.

It is often the nightmare dataset.

---

### Lessons we’ve learned

From Google Flu Trends to COVID dashboards:

* Big data is powerful, but messy
* Input quality matters (search behaviour ≠ clinical data)
* Transparency matters — the public want to know how data is used
* Models should support public health, not replace it
* Keep models up to date, or you’re predicting the future using last year’s horoscope
* Ethics is not optional

---

### Outro

So no, data isn’t medicine… but it can and has saved lives.

Health is one area where data genuinely makes the world better: detecting outbreaks, discovering treatments, understanding diseases we didn’t even have names for a few years ago.

But we’ve also learned that technology companies aren’t public health agencies — and counting search queries doesn’t make you Dr Gregory House.

As for me, I’m feeling pretty much better. Mostly what I needed was rest, fluids, and avoiding WebMD at all costs.

Thanks for tuning in to **Data with Duke**. Stay safe, stay curious — and if you feel ill, don’t Google it. Call somebody with actual medical training.

This is Duke, signing off.


