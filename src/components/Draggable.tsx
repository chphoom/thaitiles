import React from 'react';
import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';

export function Draggable(props: { id: any; styles: React.CSSProperties | undefined; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
  });
  const style = transform ? {
    transform: CSS.Translate.toString(transform)
  } : {};

  return (
    <button ref={setNodeRef}       style={{ ...style, ...props.styles }}
    {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}