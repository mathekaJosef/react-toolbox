import { ORIGINS } from 'react-toolbox-core/lib/components/ClippingBox';
import styled, { css } from 'styled-components';
import withOverride from '../utils/withOverride';

const OutlineNode = styled.div`
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  display: block;
  height: ${props => props.height}px;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  transform: scale(0);
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  width: ${props => props.width}px;
  will-change: transform;

  ${getActiveStyle};
  ${getOriginStyle};
  ${withOverride('OutlineNode')};
`;

function getActiveStyle(props) {
  if (props.active) {
    return css`
      opacity: 1;
      transform: scale(1);
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    `;
  }

  return '';
}

function getOriginStyle(props) {
  switch (props.origin) {
    case ORIGINS.TOP_RIGHT:
      return css`
        transform-origin: 100% 0;
      `;
    case ORIGINS.TOP_LEFT:
      return css`
        transform-origin: 0 0;
      `;
    case ORIGINS.BOTTOM_LEFT:
      return css`
        transform-origin: 0 100%;
      `;
    case ORIGINS.BOTTOM_RIGHT:
      return css`
        transform-origin: 100% 100%;
      `;
    default:
      return '';
  }
}

export default OutlineNode;