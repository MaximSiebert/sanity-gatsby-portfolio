import {format, distanceInWords, differenceInDays} from 'date-fns'
import React, {useState, useEffect, useRef} from 'react'
import {cn, buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import TransitionLink from "gatsby-plugin-transition-link"

import styles from './project-preview.module.css'

function ProjectPreview (props) {

  const node = useRef();
  const closeButton = useRef();

  const [showFrame, setShowFrame] = useState(false)

  function handleShowFrame () {
    setShowFrame(true)
  }

  function handleHideFrame (e) {
    if(event.keyCode === 27) {
      setShowFrame(false)
    }

    if (node.current.contains(e.target) && !closeButton.current.contains(e.target)) {
      // inside click
      return;
    }
    setShowFrame(false)
  }

  useEffect(() => {
    if (showFrame) {
      document.addEventListener("mousedown", handleHideFrame);
      document.addEventListener("keydown", handleHideFrame);
    } else {
      document.removeEventListener("mousedown", handleHideFrame);
      document.removeEventListener("keydown", handleHideFrame);
    }

    return () => {
      document.removeEventListener("mousedown", handleHideFrame);
      document.removeEventListener("keydown", handleHideFrame);
    };
  }, [showFrame]);

  return (
    <>
      <div
        className="text-left text-white rounded-lg p-1 block focus:outline-none"
      >
        <TransitionLink
          to={`/project/${props.slug.current}`}
          exit={{
            length: .6,
          }}
          entry={{
            delay: .6,
            length: .6
          }}
          className="block relative items-center bg-gray-900 hover:bg-gray-800 active:bg-gray-900 pt-3 pb-3 rounded-lg">
          {/* <div className={styles.leadMediaThumb}>
            {props.mainImage && props.mainImage.asset && (
              <img
                src={imageUrlFor(buildImageObj(props.mainImage))
                  .width(600)
                  .height(Math.floor((9 / 16) * 600))
                  .url()}
                alt={props.mainImage.alt}
              />
            )}
          </div> */}
          <h3 className="text-2xl pb-3 px-3">{props.title}</h3>
          <div className="flex font-mono text-xs opacity-75 border-t border-black pt-3 px-3">
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
        </TransitionLink>
      </div>
      {/* <div ref={node} className={cn(showFrame ? "translate-x-0" : "translate-x-full", "absolute frame w-8/12 z-20 right-0 top-0 bottom-0 transform")}>
        <div className="w-full h-full flex flex-col border-l border-green-500 h-full overflow-y-scroll bg-black">
          <div className="sticky w-full bg-black top-0 p-2 flex items-center border-strike">
            <a className="highlight text-center px-2 bg-black relative inline-block" href={props.link} target="_blank" rel="noopener noreferrer">
              <span className="relative flex">
                <span className="py-1">{props.title}</span>
                <span className="ml-1 block text-lg">↗</span>
              </span>
            </a>
            <button
              ref={closeButton}
              onClick={handleHideFrame}
              className="ml-auto highlight px-2 bg-black"
            >
              <span className="relative text-lg">
              ✕
              </span>
            </button>
          </div>
          {showFrame &&
            <iframe className="bg-white flex-grow w-full block" src={props.link}></iframe>
          }
        </div>
      </div> */}
    </>
  )
}

export default ProjectPreview