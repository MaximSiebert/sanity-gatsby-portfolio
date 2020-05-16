import React from 'react'
import {format, distanceInWords, differenceInDays} from 'date-fns'
import {Howl, Howler} from 'howler';

import styles from './project-preview.module.css'
import ExternalIcon from './icon/external'
import tickAudio from '../sounds/tick.mp3'
import clickAudio from '../sounds/click.mp3'

function ProjectPreview (props) {

  var tick = new Howl({
    src: [tickAudio]
  });

  var click = new Howl({
    src: [clickAudio],
    volume: 0.25
  });

  function playTick () {
    tick.play()
  }

  function playClick () {
    click.play()
  }

  return (
    <>
      <div
        className="text-left p-1 block focus:outline-none"
      >
        <a
          href={props.link}
          target="_blank"
          rel="nooppener noreferrer"
          className="clickable-item group block relative items-center hover:bg-gray-800 hover:border-gray-500 text-gray-500 active:bg-gray-900 border border-gray-700"
          onMouseEnter={playTick}
          onMouseDown={playClick}
        >
          <div className="py-3 px-3 flex items-center group-hover:box-shadow">
            <h3 className="text-2xl font-bold text-white">{props.title}</h3>
            <ExternalIcon classes="ext-icon w-5 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-100 ml-auto" />
          </div>
          <div className="group-hover:box-shadow flex font-medium text-xs font-mono uppercase tracking-wider border-t border-gray-700 group-hover:border-gray-500 py-3 px-3 bg-gray-800">
            <p>{props.role}</p>
            <div className="ml-auto">
              {props.type === "project"
                ? (
                  <div className={styles.publishedAt}>
                    {differenceInDays(new Date(props.publishedAt), new Date()) > 3
                      ? distanceInWords(new Date(props.publishedAt), new Date())
                      : format(new Date(props.publishedAt), 'YYYY')}
                  </div>
                ) : (
                  <div className={styles.publishedAt}>
                    {format(new Date(props.startDate), 'MM/YYYY')}
                    <span className="mx-2">–</span> 
                    {props.endDate
                      ? format(new Date(props.endDate), 'MM/YYYY')
                      : 'Present'
                    }
                  </div>
                )
              }
            </div>
          </div>
        </a>
      </div>
    </>
  )
}

export default ProjectPreview