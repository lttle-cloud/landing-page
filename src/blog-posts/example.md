---
title: "Lorem Ipsum: A Deep Dive"
excerpt: "In this post, we'll explore the fascinating world of placeholder text and its impact on modern design. From ancient origins to modern applications, we'll cover it all."
coverImage: "/assets/blog/example/cover.png"
date: "2024-03-15T00:00:00.000Z"
author:
    name: Laurentiu Ciobanu
    picture: "/assets/blog/authors/laur.png"
ogImage:
    url: "/assets/blog/example/cover.png"
featured: true
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## The Origins

Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

Here's what you can do with lorem ipsum:

-   Create placeholder text
-   Test typography
-   Fill empty spaces
-   Design layouts
-   Mock up websites

That's it. That's lorem ipsum. [You can read more about it online](https://en.wikipedia.org/wiki/Lorem_ipsum), but this is enough for us to continue.

## Implementation

Before we start, I need to warn you that this might be the simplest implementation in history. The first thing we must do is to define a struct to represent our text generator:

```rust
pub struct LoremGenerator {
    words: Vec<String>,
    paragraphs: Vec<String>,
}
```

Nothing special, except for the fact that we store both words and paragraphs. Now, let's get to generating:

```rust
pub fn generate_text(input: &mut Chars<'_>) -> Vec<String> {
    let mut paragraphs = vec![];

    loop {
        let Some(c) = input.next() else {
            break;
        };

        match c {
            '.' => paragraphs.push("End of sentence".to_string()),
            '!' => paragraphs.push("Exclamation!".to_string()),
            '?' => paragraphs.push("Question?".to_string()),
            _ => {}
        };
    }

    paragraphs
}
```

## A Simple Example

The first challenge is done. We have the generator that we need. Now we need to learn to use it. But before we can learn to use it, what is it? Did I say it too many times? It it it it.

So, what does it mean to generate lorem ipsum? Well, it means that we have a program that takes some input, processes it, and outputs placeholder text. Isn't it amazing?

**Don't panic!** Take a deep breath, and let's take it one step at a time.

## Conclusions

That was it. We just wrote a lorem ipsum generator, including the parser and the emitter. [You can find the complete code here](https://github.com/example/lorem-generator), along with some examples and some other features.

Is this useful tho? **Yes, very much so!**

These posts take a lot of time to prepare and write. If you like the content I'm making and you wish to support these kinds of useful journeys, [I have a GitHub Sponsors page now](https://github.com/sponsors/johndoe/)!

That being said, thanks for reading! Have a nice one!

Oh, and also, before I go, here's a photo of some beautiful typography using lorem ipsum.

![Typography Example](/assets/blog/example/cover.png)
