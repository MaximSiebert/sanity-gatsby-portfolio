import {format, distanceInWords, differenceInDays} from 'date-fns'
import React, {useState, useEffect, useRef} from 'react'
import {cn, buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import BlockText from './block-text'

import styles from './project-preview.module.css'

function ProjectPreview (props) {

  const node = useRef();
  const closeButton = useRef();

  const [showFrame, setShowFrame] = useState(false)

  function handleShowFrame () {
    setShowFrame(true)
  }

  function handleHideFrame (e) {
    if (node.current.contains(e.target) && !closeButton.current.contains(e.target)) {
      // inside click
      return;
    }
    setShowFrame(false)
  }

  useEffect(() => {
    if (showFrame) {
      document.addEventListener("mousedown", handleHideFrame);
    } else {
      document.removeEventListener("mousedown", handleHideFrame);
    }

    return () => {
      document.removeEventListener("mousedown", handleHideFrame);
    };
  }, [showFrame]);

  return (
    <>
      <button
        className="w-full text-left highlight text-white p-2 block focus:outline-none"
        onClick={showFrame ? handleHideFrame : handleShowFrame}
      >
        <div className="relative flex items-center">
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
          <h3 className="w-1/2 text-4xl">{props.title}</h3>
          <p className="w-1/4 pl-2">{props.role}</p>
          <div className="w-1/4 text-right">
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
          {props._rawExcerpt && (
            <div className={styles.excerpt}>
              <BlockText blocks={props._rawExcerpt} />
            </div>
          )}
        </div>
      </button>
      <div ref={node} className={cn(showFrame ? "translate-x-0" : "translate-x-full", "absolute frame w-8/12 z-20 right-0 top-0 bottom-0 transform")}>
        <div className="w-full h-full flex flex-col border-l border-green-500 h-full overflow-y-scroll bg-black">
          <div className="border-b border-green-500 sticky w-full bg-black top-0 p-2 flex items-center border-strike">
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
      </div>
    </>
  )
}

export default ProjectPreview