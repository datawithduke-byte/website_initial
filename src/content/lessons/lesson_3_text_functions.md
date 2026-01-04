---
layout: ../../layouts/Base.astro
title: "Text Functions | Data with Duke Fundamentals Lesson 3"
date: 2026-01-04
summary: "In this lesson of Spreadsheet Basics, we cover the core text functions you’ll actually use: LEN, UPPER/LOWER, LEFT/RIGHT/MID, and the unsung hero TRIM (because invisible spaces are the spreadsheet equivalent of stepping on Lego)"
tags: ["spreadsheets", "google sheets", "microsoft excel", "text functions", "LEN", "TRIM", "UPPER", "LOWER", "LEFT", "RIGHT", "MID", "FIND", "spreadsheet basics", "excel basics", "google sheets tutorial", "excel tips", "data", "data literacy", "data skills", "beginners", "learn spreadsheets"]
youtubeId: "uKCrQKzO2_A"
category: "Spreadsheets"
---
## Watch the video on YouTube
[![Watch the video](https://img.youtube.com/vi/C-9y6qHKWM8/0.jpg)](https://youtu.be/uKCrQKzO2_A)


---
### Transcript (summarised by AI)

Welcome back, ladies and gentlemen and legends — it’s fantastic to see you again.

We’re moving on with the next lesson in this **Spreadsheet Basics** series, and we’re still using the same spreadsheet I’ve introduced in the shorts on my other platforms — and in another video on my YouTube channel.

Once I’ve worked through all the tabs along the bottom, I’ll make this sheet public so you can see exactly how everything works.

---

## Setting the scene

In the last video we talked about **data types**, and I mentioned there are two main primitive data types we work with in spreadsheets.

Now… there *is* a third. If you follow me on Facebook or Instagram, you’ll know I’ve already hinted at it — and today we’re going to start bumping into it through **text**.

Before we jump in, quick reminder: I’m doing most of this series in **Google Sheets**.

Google Sheets is free — you just need a Google account. I will do a couple of videos in **Microsoft Excel**, because there are a few features that are either easier there or exclusive to Excel. But for accessibility, Google Sheets is the main tool for this series.

Right. Text.

---

## Why is text important?

If you’re building dashboards, reports, or just trying to make a spreadsheet understandable for normal humans… text matters.

Clever use of text makes insights clearer, labels cleaner, and outputs far easier to read.

So today we’re looking at basic functions and features that let you **edit, extract, clean, and format** text inside a spreadsheet.

---

## LEN: measuring text length

First up: **LEN**.

This one sounds a bit “why would I ever need that?”… but it becomes very important later when we start nesting functions together.

In Google Sheets (and Excel), you use:

* `=LEN(text)`

So if I click on the cell (C2) containing:

> “Welcome to this short spreadsheet course!”

…LEN tells me it’s **44 characters long**, including spaces and punctuation.

---

## UPPER and LOWER: changing case

Next: case conversion.

* `=UPPER(text)` converts everything to uppercase
* `=LOWER(text)` converts everything to lowercase

I’ll also quickly introduce something we’ll revisit later: **absolute references**.

If I write:

* `=UPPER($C$2)`

Those dollar signs mean the reference is **static** — it won’t change when we move or autofill formulas.

For now, don’t stress about it. It works the same as `=UPPER(C2)` in this example — but it becomes very useful later.

---

## LEFT, RIGHT, MID: extracting parts of text

Now we get into extracting text — also known as returning a **substring**.

### LEFT

* `=LEFT(text, number_of_characters)`

Example:

* `=LEFT(C2, 7)`
  Returns **“Welcome”**.

### RIGHT

* `=RIGHT(text, number_of_characters)`

Example:

* `=RIGHT(C2, 7)`
  Returns the last 7 characters.

And here’s where things get interesting…

You might look at the result and think:

“Hang on… that doesn’t look like 7 characters.”

Correct. And that brings us neatly to…

---

## TRIM: the absolute hero of text cleaning

Text often contains invisible mess — especially spaces at the beginning or end.

That’s what **TRIM** fixes.

* `=TRIM(text)`

It removes:

* leading spaces
* trailing spaces
* and cleans up extra spacing

So the text *looks* the same… but when we run:

* `=LEN(TRIM(C2))`

…we suddenly get **42 instead of 44**.

Meaning the original had **two trailing spaces** at the end.

And that explains why RIGHT looked odd — the last characters were actually spaces, not letters.

TRIM is vital if you ever want text functions to behave properly.

---

## FIND: locating text inside text

Now let’s search within a string.

The **FIND** function returns the position where a character or word first appears.

* `=FIND(search_for, text_to_search)`

Example:

* `=FIND("W", C2)` returns **1**
  because “Welcome…” starts with W.

If I search for a capital S:

* `=FIND("S", C2)`
  …it returns **23**, because the first *capital* S is in “Spreadsheets”.

Important note: **FIND is case-sensitive**.

So if you want to find a letter regardless of case, one common trick is to convert the text first.

For example:

* `=FIND("S", UPPER(C2))`

Now everything becomes uppercase, and FIND can locate the first S, even if the original was lowercase.

---

## FIND with words and phrases

FIND isn’t limited to single characters.

You can search for full words:

* `=FIND("this", C2)`

That returns the starting position of the word “this”.

And if you add a trailing space:

* `=FIND("this ", C2)`

…it will only match if “this ” exists exactly — including the space.

If it doesn’t exist, you’ll get an error. We’ll cover error handling later.

---

## FIND starting from halfway (nesting functions)

Now we’re going to do something that looks complicated but is actually a great example of why LEN matters.

FIND has an optional third argument:

* `=FIND(search_for, text_to_search, start_position)`

So we can start searching from halfway through the string by doing:

* `=FIND("S", UPPER(C2), LEN(C2)/2)`

That means:

* convert to uppercase
* start searching at half the length
* find the first “S” after that point

This is exactly the kind of nesting that makes spreadsheets really powerful.

---

## Returning everything after a word (combining FIND + RIGHT)

Now for a more advanced example: returning all text **after a specific word**.

Step 1: Find where “spreadsheets” begins.

* `=FIND("spreadsheets", C2)`

Step 2: Use RIGHT to return everything from that point onward by calculating how many characters to take from the right.

Something like:

* `=RIGHT(C2, LEN(C2) - FIND("spreadsheets", C2) + 1)`

If it looks one character off at first… welcome to **off-by-one errors**. We’ll talk about those later too.

---

## Formatting text (no formulas required)

Now let’s move away from functions and look at built-in formatting features.

These change **how text appears**, not the value itself:

* **Bold**
* *Italics*
* Underline
* Strikethrough

Same idea as date formatting: the underlying value doesn’t change — only the presentation.

---

## Aligning text

By default, spreadsheets align:

* text to the **left**
* numbers to the **right**

But you can change alignment using the toolbar:

* left
* centre
* right

Again — doesn’t change the value, just how it displays.

---

## Wrapping and clipping long text

If a cell contains a long sentence, the text can spill into neighbouring columns if they’re empty. That can confuse people.

You’ve got two main options:

### Wrap

Wrap pushes text onto a new line within the same cell.

### Clip

Clip cuts it off visually at the column edge.

Clipping can also happen if the next cell contains *anything* — even a single space (which is technically a value). But that’s not a great habit, so use the wrap/clip setting instead.

---

## The third data type: Boolean (TRUE/FALSE)

Here’s that third primitive type I mentioned earlier: **Boolean values**.

A Boolean is simply:

* TRUE
* FALSE

These become *very* important later when we get into conditions, lookups, filtering, and logic.

For now, here’s the demo:

If I compare two text values:

* `=C37=C38`

Google Sheets returns **TRUE**, even if one is “Hello” and one is “HELLO”.

That’s because a basic equality check is **not case-sensitive**.

But if I compare “HELLO” to “HI”, it returns **FALSE**, because they’re different strings.

And if I compare “HELLO” to “HELLO    ” with trailing spaces, it returns FALSE… until I TRIM the messy one:

* `=C37=TRIM(D38)`
  Now it returns TRUE, because TRIM removes the extra spaces.

---

## Wrap-up

That’s a lot, so feel free to go over the video again.

We’ve only got a few tabs left in this course:

* Date & time functions
* Common functions
* Lookups
* Arrays
* Error handling
* Tables

Then I’ll share the full sheet so you can download it and follow along.

There are also a few extras coming:

* Filters
* Autosums
* Named ranges (a very underrated time saver)

After that we’ll move into more advanced spreadsheet topics — some in Google Sheets, and some in Excel where the paid features make it worth it.

If any of this was useful — or if any of it was *not* useful — let me know in the comments, and I’ll shape future videos based on that feedback.

Appreciate your time.

This has been Duke — signing off.
