---
layout: post
title: "So, you design Data Visualizations. Visualize this: you could go blind tomorrow."
description: "It is unfortunate the way we designers typically present data – through infographics, maps, charts, and other visual formats – inherently favoring sighted and with a higher than average literacy level. This exclusionary approach leaves many people behind, particularly those with visual impairment or cognitive disabilities. As designers and developers, it's time we broaden our perspective and champion inclusivity."
date: 2023-06-11
author: Marcelo Paiva
featured_image: /images/posts/markus-winkler-IrRbSND5EUc-unsplash.jpg
featured_image_description: A photo of a line chart emphasizing the visual representation of the data, which unconsciously neglects non-sighted users who perceive data differently. Photo credits to Markus Winkler from Unsplash.
accent_color: "#f60"
---

## Reimagining Data Insights for an Inclusive Future

Data is the lifeblood of our digital age, driving decision-making across various industries and disciplines. But here's something to consider: what if you're blind? The way we typically present data - through infographics, maps, charts, and other visual formats - inherently favors those with good sight and above-average literacy levels.

<blockquote class="accent"> This exclusionary approach neglects those with visual impairment or cognitive disabilities. As designers and developers, it's high time we broaden our perspective and champion inclusivity.</blockquote>

## Stop the Visual Bias

Let's start by redefining 'data visualizations'. While it emphasizes the visual interpretation of data, this term overlooks users who perceive data differently. I propose we shift to the term 'data insights', a more inclusive concept that caters to all users, regardless of their visual capability or cognitive abilities.

## Communication Over Medium

Determining how to present data before considering who will consume it is akin to buying a car solely based on color. Let's instead adopt a narrative approach, focusing on the story the data tells.

### The Importance of a Content-First Approach

In a previous post, titled [Communicating Accessibility Through Inclusive Design](https://mpaiva.github.io/venus/blog/communicating-accessibility-through-inclusive-design), I have written about the importance of including people with disabilities in design teams, and created a personal web tool called [No Latin](https://nolatin.com) to help UX professionals adopting a content-first approach, and begin testing concepts with people with disabilities early in the design process. The creation of universally understandable data insights doesn't require a complex process; it merely involves infusing intention into the design practices.

### What’s the story behind the data?

Instead of beginning by focusing on which chart type to use for a dataset, try narrating what the data might mean to the user. Describe it without depending on visual cues. For instance, consider the following data record published by the United States Office of Special Education Programs (OSEP):

Data Table: **"Number of children in early childhood programs served under Individuals with Disability Education Act (IDEA), Part B, by disability and state: 2021-22."**

This dataset offers a detailed child count of varying disabilities, ages 3 through 5 served under IDEA across all US states and territories.

From a preliminary overview, some patterns and high-level findings emerge:

<blockquote class="accent">Autism has a significant presence in most states, with California reporting over 13,000 cases—the highest in this category.</blockquote>
<blockquote class="accent">Some disabilities, like Deaf-blindness, appear less frequently, indicating these conditions might be less common or underreported.</blockquote>
<blockquote class="accent">Certain disabilities, such as Specific Learning Disabilities and Speech or Language Impairments, are notably high in states like California and New York.</blockquote>

Now that we have a narrative, the next step is figuring out the best way to communicate it. The key here is NOT to start deciding which data visualization type to use. Instead, imagine how a screen reader user would experience the story.

## Step 1: Your primary user persona has a disability

When a screen reader user lands on a web page reporting the aforementioned data, the layout must meet a few crucial goals:

- Confirm the right report by announcing the window title when the page is loaded.
- Provide clear, comprehensive page navigation.
- Ensure proper heading names and a well-structured hierarchy that support assistive technologies like screen readers.
- Prioritize content representation over visual display.

## Step 2: Designing with words

Don't rush into visualizing the data. Start by designing with words and at a later stage consider adding features like a bar graph, ensuring all features meet the accessibility requirements for data visualizations.

Creating priority guides is fun and quick. Here is our proposed hierarchy:

1. **Header and navigation**
   - Page name and description
2. **Report name**
   - Title and description
3. **About the report**
   - Report metadata
4. **Quick Summary**
   - List of data highlights
5. **Key indicators**
   - Top 5 States by All Disabilities
     - State 1
     - State 2
     - State 3
     - State 4
     - State 5
   - Top 3 disabilities in All States
     - Indicator 1
     - Indicator 2
     - Indicator 3
6. **Parents Resources**
   - List of resources
7. **Contact us**
   - Name
   - E-mail address
   - Message
   - Submit Button

## Step 3: Describing each section further

Putting another level of intent into these simple sections, our priority guides will start taking shape in a way our screen reader user will be able to understand the meaning of the data effortlessly.

### Header and navigation

- Title: Child Count by States
- Description: This dataset provides a detailed child count with various disabilities, ages 3 through 5 served under IDEA across all states and territories of the United States.

### Report Name

- Title: IDEA Section 618 Data Products
- Description: Section 618 of the Individuals with Disabilities Education Act (IDEA) requires that each state submit data about the infants and toddlers, birth through age 2, who receive early intervention services under Part C of IDEA and children with disabilities, ages 3 through 21, who receive special education and related services under Part B of IDEA.

### About this data:

- Updated: 3 months ago.
- License: Creative Commons CCZero
- Publisher: Office of Special Education Programs (OSEP)
- Tags: #count #data-products #disability

### Quick Summary

Here are some highlights we extracted from this data before getting into the details:

- In the period between 2021 and 2022, there were 471,377 cases of children with disabilities in all states.

- There were 216,727 children with Developmental Delay in all states. This was the largest disability type, followed by Speech or language impairments with 158,832 cases reported.

- Autism seems to have a considerable presence in most states. For instance, California reports over 13,000 cases, the highest in this category, representing three times more than the second highest, Pennsylvania with just over 4,000 cases, followed by Ohio with over 3,000.

- Some types of disabilities, like Deaf-blindness, appear less frequently in the dataset, indicating these conditions might be less common or underreported.

- Specific Learning Disabilities and Speech or Language Impairments are considerably high in some states like California and New York, which might reflect the larger population in these states or more comprehensive reporting.

### Key Indicators

This section showcases the top states and top disabilities reported in this data.

#### Top 5 states by all disabilities

States and territories sorted by the reported number of all disabilities

1. California: 41,751
2. New York: 40,172
3. Texas: 29,975
4. Pennsylvania: 28,317
5. Illinois: 22,755

#### Top 3 disabilities in all states

Largest number of disabilities reported in all States and territories.

##### Autism was the top disability reported between 2021–2022.

Top ten states with the highest number of cases of Autism were:

1. California: 13,223
2. Texas: 8,701
3. Pennsylvania: 4,256
4. Ohio: 3,175
5. Massachusetts: 2,606
6. North Carolina: 2,106
7. Florida: 2,212
8. Illinois: 1,974
9. Michigan: 1,270
10. Minnesota: 1,221

##### Specific Learning Disabilities was the second largest disability reported between 2021–2022.

Top ten states with the highest number of cases of Specific Learning Disabilities were:

1. California: 23,468
2. Texas: 15,353
3. Pennsylvania: 9,393
4. Illinois: 8,294
5. Ohio: 8,000
6. Michigan: 6,457
7. Indiana: 5,882
8. Kentucky: 4,796
9. Wisconsin: 4,357
10. Utah: 3,593

##### Speech or Language Impairments

Third largest disability reported between 2021–2022.

1. California: 23,468
2. Texas: 15,353
3. Pennsylvania: 9,393
4. Illinois: 8,294
5. Ohio: 8,000
6. Michigan: 6,457
7. Wisconsin: 4,357
8. Florida: 3,785
9. Utah: 3,593
10. New York: 2,880

### Parents Resources

Remember, you're not alone in this journey. There are many resources available to support you and your child. It may take time to find the best strategies and interventions for your child, but with patience and support, progress is possible.

There are many resources available to parents of children with disabilities, from government programs and non-profit organizations to online communities and educational resources. The following are some resources we are gathering to provide parents in the near future:

- Resource item with link will be here in the future
- Resource item with link will be here in the future
- Resource item with link will be here in the future

### Contact Us

Do you have a question or suggest about this report or data? Please send us a message in the form below and we will respond via email as early as possible.

- Enter your name:
  - text input
- Your email address
  - email input
- What's your comment or question?
  - textarea input
- Send button

## Step 4: Rapid Prototyping with Accessibility in Mind

Most UX professionals struggle to incorporate accessibility considerations into their design process, leading to subpar experiences for users with disabilities. This is mostly because Agile teams tend to implement content design and Accessibility towards the end of the design and development cycle.

For this exercise, we used a web tool to create priority guides and export a fully accessible prototype including the following Accessibility features:

- Detailed skip-links
- Purposeful landmarks
- Semantic headings
- Appropriate aria attributes
- Image alternative text
- Visual focus appearance

We can share the prototype with our usability study participants, including people with disabilities, using the link below:

[Accessible prototype](https://nolatin.com/share/child-count-001)

## Final step: Testing with users before designing the interface layout

Before recruiting participants for a usability study, we always test the page with screen readers. We pay close attention to how the page navigation works and how the screen reader pronounces the content.

By shifting our focus from visual bias to inclusivity, we can create a more equitable data experience for all. Let's remember that behind every data point is a human experience. As the first principle of Inclusive Design suggests, we need to [learn to recognize exclusion](https://mpaiva.github.io/venus/blog/learning-to-recognize-exclusion). By acknowledging and addressing the different ways people interact with data, we can foster a more inclusive, comprehensive, and effective communication strategy.

In future posts, I will document our user research outcomes.
