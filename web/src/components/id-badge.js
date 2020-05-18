import React from 'react';
import {cn} from '../lib/helpers'
import {Howl, Howler} from 'howler';
import TransitionLink from "gatsby-plugin-transition-link"
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import Corners from './corners'

import tickAudio from '../sounds/tick.mp3'
import clickAudio from '../sounds/click.mp3'
import startAudio from '../sounds/start.mp3'

function IdBadge({portrait, siteTitle, role, showName}) {

  const length = 1;
  const delay = .6;

  var tick = new Howl({
    src: [tickAudio]
  });

  var click = new Howl({
    src: [clickAudio],
    volume: 0.2
  });

  var start = new Howl({
    src: [startAudio],
    volume: 0.15
  });

  function playTick () {
    tick.play()
  }

  function playClick () {
    click.play()
  }

  function playStart () {
    start.play()
  }

  return (
    <TransitionLink
      onMouseEnter={playTick}
      onMouseDown={playClick}
      onClick={playStart}
      className={cn(showName && "mb-4", "inner-border group clickable-item id-badge hover:box-shadow-light leading-tight flex items-center logo border border-gray-700 hover:border-green-500 bg-gray-800 active:bg-gray-900 font-medium block")}
      to='/'
      exit={{
        length: length,
      }}
      entry={{
        delay: delay,
        length: length
      }}
    >
      <Corners classes="out" />
      <div class="relative">
        {portrait &&
          <>
            <img
              className="block w-16 h-auto portrait"
              className={cn(showName ? "w-16" : "w-12", "block h-auto portrait")}
              src={imageUrlFor(buildImageObj(portrait))
                .width(128)
                .height(128)
                .fit('crop')
                .url()}
              alt={portrait.alt}
            />
            <img
              className={cn(showName ? "w-16" : "w-12", "block h-auto portrait-hover absolute inset-0")}
              src={imageUrlFor(buildImageObj(portrait))
                .width(128)
                .height(128)
                .fit('crop')
                .url()}
              alt={portrait.alt}
            />
          </>
        }
      </div>
      {showName &&
        <div className="px-4 pb-1 block text-base font-bold text-white">
          {siteTitle}
          <span className="font-mono block text-xs font-normal text-gray-500">{role}</span>
        </div>
      }
    </TransitionLink>
  );
}

export default IdBadge;