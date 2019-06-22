import React, { Component } from "react";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";

class SUButton extends Component {
  render() {
    return (
      <div>
        <ScrollUpButton
          StopPosition={0}
          ShowAtPosition={150}
          EasingType='easeOutCubic'
          AnimationDuration={500}
          ContainerClassName='ScrollUpButton__Container'
          TransitionClassName='ScrollUpButton__Toggled'>
        </ScrollUpButton>
      </div>
    );
  }
}
export default SUButton