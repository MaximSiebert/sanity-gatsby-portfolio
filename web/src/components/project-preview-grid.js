import {Link} from 'gatsby'
import React from 'react'
import ProjectPreview from './project-preview'

import styles from './project-preview-grid.module.css'
import SectionHeader from './section-header'

function ProjectPreviewGrid (props) {
  return (
    <div>
      <SectionHeader
        title={props.title}
      />
      <ul className="flex flex-wrap pb-8">
        {props.nodes &&
          props.nodes.map(node => (
            <li className="min-w-1/2 flex-1" key={node.id}>
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
