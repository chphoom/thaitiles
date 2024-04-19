import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export function Droppable(props: {
  className?: string;
  styles?: React.CSSProperties | undefined; id: any; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined;
}) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: isOver ? 'green' : undefined,
  };


  return (
    <div ref={setNodeRef} style={{ ...style, ...props.styles }} className={props.className}>
      {props.children}
    </div>
  );
}