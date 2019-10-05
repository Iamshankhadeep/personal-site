---
type: "Article"
path: "/articles/sams-hackathon-guide"
title: "Sam's Hackathon Survival Guide"
desc: "A creative cheat sheat to help you get off to a running start."
year: 2019
---

I put this together as my way of giving back. I hope that it might help you get hacking smarter and faster. 

- ## [The Idea](#The-Idea)
- ## [Naming Your Hack](#Naming-Your-Hack)
- ## [Quick & Dirty Branding](#Quick-&-Dirty-Branding)
- ## [Design Inspiration](#Design-Inspiration)
- ## [Get Some Styles](#Styles)
<!-- - ## [UI Boilerplates](#UI-Boilerplates) -->
- ## [Surviving The Night](#Surviving-The-Night)
- ## [Fake It Till You Make It](#Fake-It-Till-You-Make-It)

<h1 class="is-pink" id="The-Idea">The Idea</h1>

Coming up with a decent idea can be difficult. For me, the best hacks are the hacks that make my everyday better. Ask your team what things they have struggled with in the past week - a boring repetitive task? Something mundane maybe?

Take those pain points and come up with as many solutions as you can for them. It doesn't matter how crazy the idea is - sometimes the craziest ideas can be scaled down into something clever that no one has thought of.

<h1 class="is-pink" id="Naming-Your-Hack">Naming Your Hack</h1>

### Keep It Short and Memorable
The shorter the better. The judges are going to see plenty of hacks. Is your hack's name memorable enough to stand out from the rest? Less than 10 characters is my rule!
### Choose A Name That Is Searchable
If I search for your name am I going to find it on google or does it share its name with a million other products and servies?
### Align It With A Domain
Make sure the domain for your chosen name is available. Buy it early. Getting the domain activated can take a long time and if you leave it until the final stretch you'll be too late to get it live.
### Waste No More Time On It
The name is not important - the idea is. If you've spent more than 20 mins on the name then you're doing something wrong.

<h1 class="is-pink" id="Quick-&-Dirty-Branding">Quick & Dirty Branding</h1>

### Colour

[Pantone Color of the Year](https://store.pantone.com/uk/en/color-of-the-year)

Since 2000, the Pantone Color Institute has declared a particular colour "Color of the Year". Twice a year the company hosts, in a European capital, a secret meeting of representatives from various nations' colour standards groups. After two days of presentations and debate, they choose a colour for the following year. The results of the meeting are published in *Pantone View*, which fashion designers, florists, and many other consumer-oriented companies purchase to help guide their designs and planning for future products. 

You may notice that *Monzo* were paying attention when they released their bank card 😉. 

[Coolors](https://coolors.co) 

Coolors is my go-to-site for colour themes. I use their generator all the time to find good combinations I can use for logos, posters, websites and more! You can also paste in your own hex values and lock them and then generate colours that compliment them.
### Font

Before using font make sure you read [the typography manual](https://blind.com/blog/typography-manual/).

Find two fonts that work well together [here](https://fontjoy.com/).

And download those fonts [here](https://fonts.google.com/).

### Icons

[The Noun Project](https://thenounproject.com/) or [FlatIcon](https://www.flaticon.com/) for SVGs and PNGs of everything under the sun.


<h1 class="is-pink" id="Design-Inspiration">Design Inspiration</h1>

*Users spend most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they already know.* -  Laws of UX

This quote is a great reason to be inspired or even steal good design from other sites. I use two main sources for my inspiration:

[dribbble](https://dribbble.com/): Arguably the home of designers online.

[pages.xyz](https://www.pages.xyz/): A hall of fame for simply beautiful websites.

[uplabs](https://www.uplabs.com/): A great place for designs along with their original files for download. Most of them are free.


<h1 class="is-pink" id="Styles">Get Some Styles</h1>
Setting up style sheets can be annoying. I am a big fan of scss so here, let me save you the hassle.

##### (Psst! These are already in the boiler plates below if you'd rather just get cracking.)

### Grid Layout

This codes is a little long for a snippet so save these links to grab the files.

Prerequisite:
[_flex.scss](./_flex.scss) by Brian Franco

Then go and grab:
[layout.scss](./layout.scss)

### Margin & Padding

```
// Adjust this to include the pixel amounts you need.
$spaceamounts: (5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 75, 100); 
// Leave this variable alone
$sides: (top, bottom, left, right); 

@each $space in $spaceamounts {
    .margin-#{$space/5} {
        margin: #{$space}px !important;
    }
    .pad-#{$space/5} {
      padding: #{$space}px !important;
  }
  @each $side in $sides {
    .margin-#{$space/5}-#{str-slice($side, 0, 1)} {
      margin-#{$side}: #{$space}px !important;
    }
  
    .pad-#{$space/5}-#{str-slice($side, 0, 1)} {
      padding-#{$side}: #{$space}px !important;
    }
  }
}
```

### Colour Colour Colour 
Switch out the brand colours at the top of this snippet with your own.
```
// Add as many colours as you like comma seperated.
$brand-colors: 
("white",white),
("black",#1C1C1C),


@each $color in $brand-colors {
  .is-#{nth($color,1)}-bg{
    background-color: nth($color,2) !important;
  }
  .is-#{nth($color,1)}{
    color: nth($color,2) !important;
  }
}
```
Now you can add these colours to your things using:
```
// Make item the colour
is-white 
// Make the background the colour
is-white-bg
```
<!-- 
<h1 class="is-pink" id="UI-Boilerplates">UI Boilerplates</h1>
Here have some boilerplates free of charge.

### GatsbyJS
This is my new favourite framework. A react static site generator and so much more! Did I mention its *blazing* fast? -->


<h1 class="is-pink" id="Surviving-The-Night">Surviving The Night </h1>
Staying up for the whole hack is not easy - heres a couple of things I suggest you do to make it a little less painful.

### Drink Plenty of Water
Drink water as often as you remember too. I never drank enough and I always felt super dehydrated by day two. It can improve your mood and will probably make your code better.


### Avoid the Sugar Rush
Consuming lots of sugar can get you buzzing but its usually followed by a sugar low. When you are already tired, and you add a sugar low on top of it, then there is no way you will survive the night without crashing hard. Reserve the sugar until the final sprint. 

### 5 to 7

For me the hardest time of a hack is 5AM - I get these pinching headaches right at the front of my head. I always find that if I can make it to 7 then I'm fine. If you find yourself with the same thing, stop coding, walk around, talk to people and preocccupy your mind with something else. It will pass. The only times I have ever caved at hackathons is when I've tried to continue coding at this point.

<h1 class="is-pink" id="Fake-It-Till-You-Make-It">Fake It Till You Make It</h1>
My final piece of advice is to fake it if time is pressing. Chances are that the judges wont have enough time to delve deep into your project and be sure its all working as you say it is under the hood. If you've been stuck on something for a long time, find a way to fake the functionality and move on. Ain't got time for that shit.

-

## Now Go Smash That Hack 💪

![Smash!](./smash.gif)