import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export function Droppable(props: {
  styles?: React.CSSProperties | undefined; id: any; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined;
}) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };


  return (
    <div ref={setNodeRef} style={{ ...style, ...props.styles }}>
      {props.children}
    </div>
  );
}