import React from 'react'

const NavigationDots = ({ active }) => {
  let navbaarItems = ["home", "about", "testimonial", "work", "skills", "contact"]

  return (
    <div className="app__navigation">
        {
            navbaarItems.map( (item, index) => (
              <a
                href={`#${item}`}
                key = {item + index}
                className = "app__navigation-dot"
                
                style={ active === item ? {backgroundColor : '#313BAC'} : { }}
              />
            ))
        }
    </div>
  )
}

export default NavigationDots