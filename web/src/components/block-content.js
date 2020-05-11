import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import clientConfig from '../../client-config'
import serializers from './serializers'
import styles from './block-content.module.css'

const BlockContent = ({blocks}) => (
  <BaseBlockContent className={styles.blockContent + " space-y-8"} blocks={blocks} serializers={serializers} {...clientConfig.sanity} />
)

export default BlockContent
