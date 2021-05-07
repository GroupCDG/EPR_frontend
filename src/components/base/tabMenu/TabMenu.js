import React from 'react'
import PropTypes from 'prop-types'

import { WrapperSt } from './TabMenu.style'

const TabMenu = ({ className, tabs, tabContent, defaultTabIndex }) => {
  const [tabIndex, setTabIndex] = React.useState(defaultTabIndex)
  const instanceId = React.useRef(Date.now())

  const classes = ['TabMenu']
  if (className) classes.push(className)

  const onTabClick = (index) => () => setTabIndex(index)

  return (
    <WrapperSt className={classes.join(' ')}>
      <ul className="tabs">
        {tabs.map((t, index) => (
          <li key={t.key} className="tabLi">
            <label className="tabLabel" htmlFor={`tabmenu_${t.key}`}>
              <input
                className="tabRadio"
                id={`tabmenu_${t.key}`}
                type="radio"
                name={`tabMenu_${instanceId.current}`}
                value={index}
                checked={index === tabIndex}
                onChange={onTabClick(index)}
              />
              <span className="tabLabelContent">{t.value}</span>
            </label>
          </li>
        ))}
      </ul>
      <div className="tabContent">{tabContent[tabIndex]}</div>
    </WrapperSt>
  )
}

TabMenu.displayName = 'TabMenu'

TabMenu.propTypes = {
  className: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string,
        PropTypes.number,
      ]),
    })
  ),
  tabContent: PropTypes.arrayOf([PropTypes.string, PropTypes.node]),
  defaultTabIndex: PropTypes.number,
}

TabMenu.defaultProps = {
  className: null,
  tabs: null,
  tabContent: null,
  defaultTabIndex: 0,
}

export default TabMenu
