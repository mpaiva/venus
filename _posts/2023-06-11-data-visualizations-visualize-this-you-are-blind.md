---
layout: post
title: "Data Visualizations… Visualize this: you’re blind."
description: "It is unfortunate the way we designers typically present data – through infographics, maps, charts, and other visual formats – inherently favoring sighted and with a higher than average literacy level. This exclusionary approach leaves many people behind, particularly those with visual impairment or cognitive disabilities. As designers and developers, it's time we broaden our perspective and champion inclusivity."
date: 2023-06-11
author: Marcelo Paiva
featured_image: /images/posts/markus-winkler-IrRbSND5EUc-unsplash.jpg
featured_image_description: A photo of a line chart emphasizing the visual representation of the data, which unconsciously neglects non-sighted users who perceive data differently. Photo credits to Markus Winkler from Unsplash.
accent_color: "#f60"
---

# Reimagining Data Insights for an Inclusive Future

Data is the lifeblood of our digital age, driving decision-making across various industries and disciplines. But here's something to consider: what if you're blind? The way we typically present data - through infographics, maps, charts, and other visual formats - inherently favors those with good sight and above-average literacy levels. This exclusionary approach neglects those with visual impairment or cognitive disabilities. As designers and developers, it's high time we broaden our perspective and champion inclusivity.

## Moving Beyond Visual Bias

Let's start by redefining 'data visualizations'. While it emphasizes the visual interpretation of data, it often overlooks users who perceive data differently. I propose we shift to the term 'data insights', a more inclusive concept that caters to all users, regardless of their visual capability or cognitive abilities.

## Communication Over Medium

Determining how to present data before considering who will consume it is akin to buying a car solely based on color. Let's instead adopt a narrative approach, focusing on the story the data tells.

## The Importance of a Content-First Approach

In my previous discussions on creating better accessibility, I've stressed the importance of a content-first approach. It allows me to begin testing concepts with people with disabilities early in the design process. The creation of universally understandable data insights doesn't require a complex process; it merely involves infusing intention into our design practices.

## Decoding the Data Story

Instead of focusing on the chart type to use for a dataset, try narrating what the data signifies. Describe it without depending on visual cues. For instance, consider the following data record published by the United States Office of Special Education Programs (OSEP):

"Number of children in early childhood programs served under Individuals with Disability Education Act (IDEA), Part B, by disability and state: 2021-22."

This dataset offers a detailed child count of varying disabilities, ages 3 through 5 served under IDEA across all US states and territories.

From a preliminary overview, some patterns and high-level findings emerge:

- Autism has a significant presence in most states, with California reporting over 13,000 cases—the highest in this category.
- Some disabilities, like Deaf-blindness, appear less frequently, indicating these conditions might be less common or underreported.
- Certain disabilities, such as Specific Learning Disabilities and Speech or Language Impairments, are notably high in states like California and New York.

## Conveying the Story Effectively

Now that we have a narrative, the next step is figuring out the best way to communicate it. The key here is NOT to start deciding which data visualization type to use. Instead, imagine how a screen reader user would experience the story. Start by designing with words and then consider adding features like a bar graph, ensuring all features meet the accessibility requirements for data visualizations.

When a screen reader user lands on a web page reporting the aforementioned data, the layout must meet a few crucial goals:

- Confirm the right report by announcing the window title when the page is loaded.
- Provide clear, comprehensive page navigation.
- Ensure proper heading names and a well-structured hierarchy that support assistive technologies like screen readers.
- Prioritize content representation over visual display.

## Reiterating: Design with Words!

Don't rush into visualizing the data. Begin by narrating what the data signifies—design with words!

Our high-level findings from the OSEP dataset can be summarized as follows:

- There were 471,377 cases of children with disabilities in all states during 2021-2022.
- Developmental Delay was the most common disability type, with

216,727 reported cases.

- Autism is significantly prevalent, with California reporting over 13,000 cases.
- Conditions like Deaf-blindness are less frequently reported.
- Specific Learning Disabilities and Speech or Language Impairments are notably high in some states like California and New York.

This summary allows any user to gather sufficient information without needing to navigate a potentially hard-to-read spreadsheet file.

## Putting Words to Work

Most UX professionals struggle to incorporate accessibility considerations into their design process, leading to subpar experiences for users with disabilities. Over my 12 years of experience creating enterprise-level platforms, I've noticed that content and accessibility are often afterthoughts.

For the Child Count report, we adopted a content-first approach, built an accessible prototype, and created priority guides to understand user needs and desired outcomes.

Here is our proposed hierarchy:

- Header and navigation with window title and description.
- Report name and description
- About
- Quick Summary
- Key indicators
- Resources for parents
- Contact us

We used a web tool to create priority guides and export an accessible prototype, considering the following accessibility features:

- Detailed skip-links
- Purposeful landmarks
- Semantic headings
- Appropriate aria attributes
- Image alternative text
- Visual focus appearance

We can share the prototype with our usability study participants, including people with disabilities, using the link below:

https://nolatin.com/share/child-count-001

## Final Testing Stage before designing the interface layout

Before recruiting participants for a usability study, we always test the page with screen readers. We pay close attention to how the page navigation works and how the screen reader pronounces the content.

By shifting our focus from visual bias to inclusivity, we can create a more equitable data experience for all. Let's remember that behind every data point is a human experience. The first principle of Inclusive Design is to recognize exclusion, and by acknowledging and addressing the different ways people interact with data, we can foster a more inclusive, comprehensive, and effective communication strategy.

In future posts, I will document our user research outcomes.
