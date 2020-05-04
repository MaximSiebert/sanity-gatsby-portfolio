import {Link} from 'gatsby'
import React from 'react'
import ProjectPreview from './project-preview'

import styles from './project-preview-grid.module.css'
import SectionHeader from './section-header'

function ProjectPreviewGrid (props) {
  return (
    <div className="mb-12">
      <SectionHeader
        firstLabel={props.firstLabel}
        secondLabel={props.secondLabel}
        thirdLabel={props.thirdLabel}
      />
      <ul>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
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
