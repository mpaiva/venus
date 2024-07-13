---
date: 2023-08-01 00:00:01
title: "Should your portfolio be accessible? Hell yeah!"
description: "As designers, our job is to create experiences that are inclusive and welcoming to everyone. Yet, how often do we think about accessibility when it comes to our own resumes and portfolios? In this article I'll share some accessibility and explain why making your resume and portfolio accessible is not just important, but essential."
author: Marcelo Paiva
featured_image: /images/posts/mpaiva_banksy_style_graffiti_painting_of_your_portfolio.png
featured_image_description: "The image features a piece of graffiti art in a style reminiscent of Banksy. It depicts a young child wearing a red jacket and a knitted hat. The child is looking to the side, holding a bag. The background is predominantly black with some graffiti tags in the lower left corner.The main text in white, bold letters reads: Is your portfolio accessible?"
accent_color: "#f93d37"
---

As designers, our job is to create experiences that everyone can enjoy. But do we think about accessibility when it comes to our own resumes and portfolios? Making your design portfolio accessible is important and here's why:

## 1. Use Clear HTML
Clear HTML helps screen readers understand your content. Use tags like `<header>`, `<main>`, `<article>`, and `<footer>` to create a logical order. This not only improves accessibility but also helps with SEO.

**Example:**
```html
<header>
  <h1>Marcelo Paiva</h1>
  <nav>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
<main>
  <section id="about">
    <h2>About Me</h2>
    <p>I’m a UX designer, developer and passionate about accessibility...</p>
  </section>
  <section id="portfolio">
    <h2>My Work</h2>
    <!-- Portfolio items -->
  </section>
</main>
<footer>
  <p>© 2024 Marcelo Paiva</p>
</footer>
```

## 2. Ensure Good Color Contrast
Text should have enough contrast against its background to be readable for people with visual impairments. Use tools like the WCAG Contrast Checker to verify that your color choices meet the WCAG AA or AAA standards.

**Example:**
- Use a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text.

## 3. Provide Alt Text for Images
Alt text descriptions are crucial for screen readers to convey the content of images to users who cannot see them. Be descriptive yet concise.

**Example:**
```html
<img src="portrait.jpg" alt="Portrait of Marcelo Paiva, a UX designer passionate about accessibility">
```

## 4. Use Easy-to-Read Fonts and Sizes
Choose fonts that are easy to read and avoid using overly small font sizes. Ensure that your text can be resized without losing content or functionality.

**Tips:**
- Use a base font size of at least 16px.
- Avoid using decorative fonts for large blocks of text.

## 5. Make Your Navigation Keyboard-Friendly
Ensure that all interactive elements (e.g., links, buttons) can be accessed and operated using a keyboard. This is crucial for users who cannot use a mouse.

**Tips:**
- Use the `:focus` pseudo-class to highlight focused elements.
- Ensure that all form fields and buttons can be tabbed through in a logical order.

## 6. Create Accessible Forms
Label your form fields properly, provide clear instructions, and ensure that forms can be navigated using a keyboard. Use ARIA labels where necessary.

**Example:**
```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  
  <button type="submit">Submit</button>
</form>
```

## 7. Test with Screen Readers
Regularly test your portfolio with free screen readers like [NVDA](https://www.nvaccess.org/download/) (Windows) or VoiceOver (Mac). This will help you identify and fix accessibility issues that may not be apparent otherwise.

**Tip:**
- Use a screen reader to navigate your site and ensure that all content is accessible and understandable.
- Download Deque's Screen Readers Survival Guide - [Basic Keyboard Shortcuts](https://dequeuniversity.com/screenreaders/survival-guide)

## 8. Use ARIA Landmarks
ARIA landmarks help screen reader users understand the structure of your page. Use roles like `banner`, `navigation`, `main`, and `contentinfo` to define different sections.

**Example:**
```html
<div role="banner">
  <!-- Site header -->
</div>
<div role="navigation">
  <!-- Site navigation -->
</div>
<div role="main">
  <!-- Main content -->
</div>
<div role="contentinfo">
  <!-- Footer information -->
</div>
```

## 9. Offer Multiple Ways to Contact You
Provide various contact methods (e.g., email, phone, social media) to accommodate different user preferences and needs.

**Example:**
- Include a contact form, email address, and social media links on your contact page.

## 10. Choose Accessible Templates
When using platforms like Squarespace, be mindful of the templates you select. Not all templates are created with accessibility in mind. Look for templates that prioritize accessibility features, such as proper heading structures, high contrast, and keyboard navigability. Avoid templates that rely heavily on images without alt text or have poor contrast.

**Tip:**
- Check the accessibility of a template before committing to it, and make necessary adjustments to enhance accessibility.

## 11. Test with the WAVE Tool
Use the [WAVE tool](https://wave.webaim.org/) to check your website for accessibility issues. This free tool provides visual feedback about the accessibility of your content, helping you identify and fix potential problems.

**Tip:**
- Regularly test your portfolio with the WAVE tool to catch and address any new accessibility issues.

## 12. Continuous Learning
Accessibility standards are always evolving. Stay updated with the latest guidelines and continually improve your resume and portfolio to ensure you remain at the forefront of inclusive design.

**Tip:**
- Follow accessibility experts and organizations on social media, and participate in accessibility webinars and workshops.

## Conclusion
Making your design portfolio accessible is a vital step in ensuring that your work can be appreciated by a diverse audience. By following these practical tips, you can demonstrate your commitment to inclusive design and set yourself apart as a thoughtful, professional designer. Let’s make our work accessible to everyone because it’s the right thing to do. Hell yeah!
