import React from 'react'

const FaqPage = () => (
  <div>
    <h1 className="heading heading--level-1">FAQ</h1>
    <div className="util--padding-tl">
      <h3 className="heading heading--level-4 heading--color-blue">So...what's this Creamery thing all about?</h3>
      <p className="heading--color-gray-dark">Creamery is an app designed to let dessert lovers review and share ice cream suggestions. Do you love dessert? Me too! It was my way of capitalizing on my love of ice cream while also teaching myself React and Redux.</p>
    </div>
    <div className="util--padding-tl">
      <h3 className="heading heading--level-4 heading--color-blue">Do I need to make an account to use the app?</h3>
      <p className="heading--color-gray-dark">Nope, you're totally free to browse around and gaze upon the beautiful ice creams I have photographed and subsequently eaten.</p>
    </div>
    <div className="util--padding-tl">
      <h3 className="heading heading--level-4 heading--color-blue">What happens if I forget my password?</h3>
      <p className="heading--color-gray-dark">At this time you're SOL. So pick a password you can remember. It's not like I'm capturing any seriously personal information when you sign up anyway.</p>
    </div>
    <div className="util--padding-tl">
      <h3 className="heading heading--level-4 heading--color-blue">[insert feature name] is broken. What do I do?</h3>
      <p className="heading--color-gray-dark">Dope! You found a bug. You should report it by opening an issue on <a className="link-color--blue" href="http://github.com/talum/creamery" target="_blank">GitHub</a>. No GitHub? You can email me, I guess, but you'll have to track down my email address.</p>
    </div>
    <div className="util--padding-tl">
      <h3 className="heading heading--level-4 heading--color-blue">Why are there so many bugs?</h3>
      <p className="heading--color-gray-dark">Well, it's just me building this without a product manager or a QA team. So, chill.</p>
    </div>
    <div className="util--padding-tl">
      <h3 className="heading heading--level-4 heading--color-blue">What else is on the product road map?</h3>
      <p className="heading--color-gray-dark">Oh, plenty. I'm still figuring out the best way to let users add comments, add a cool rating system, and allow users to suggest ice creams and parlors. I'm hoping to integrate Instagram. If you have more ideas, I'm happy to take them!</p>
    </div>
    <div className="util--padding-tl">
      <h3 className="heading heading--level-4 heading--color-blue">This app is so cool. How did you learn how to program?</h3>
      <p className="heading--color-gray-dark">At the Flatiron School, which I highly recommend to anyone interested in learning how to code. On a related note, I'll be writing a series of blog posts on how I build this app over on my <a className="link-color--blue" href="https://talum.github.io" target="_blank">technical blog</a>.</p>
    </div>
  </div>
) 

export default FaqPage
