import React from 'react'
import {format, distanceInWords, differenceInDays} from 'date-fns'
import {cn, buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import TransitionLink from "gatsby-plugin-transition-link"

import styles from './project-preview.module.css'
import ExternalIcon from './icon/external'

function ProjectPreview (props) {
  return (
    <>
      <div
        className="text-left text-white rounded-lg p-1 block focus:outline-none"
      >
        <a
          href={props.link}
          target="_blank"
          rel="nooppener noreferrer"
          className="group block relative items-center bg-gray-900 hover:bg-gray-800 active:bg-gray-900 pt-3 pb-3 rounded-lg">
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
          <div className="pb-3 px-3 flex items-center">
            <h3 className="text-2xl font-bold">{props.title}</h3>
            <ExternalIcon classes="w-5 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-100 ml-auto text-white" />
          </div>
          <div className="flex font-medium text-xs opacity-75 border-t border-black pt-3 px-3">
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