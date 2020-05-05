import {Link} from 'gatsby'
import React from 'react'
import ProjectPreview from './project-preview'

import styles from './project-preview-grid.module.css'
import SectionHeader from './section-header'

function ProjectPreviewGrid (props) {
  return (
    <div className="mb-12 w-10/12 ml-auto px-4">
      <ul className="flex flex-wrap">
        {props.nodes &&
          props.nodes.map(node => (
            <li className="w-1/2 p-2" key={node.id}>
                <ProjectPreview {...node} type={props.type} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  )
}

ProjectPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default ProjectPreviewGrid
