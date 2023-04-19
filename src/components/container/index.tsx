import React, { forwardRef, HTMLProps } from 'react';
import clsx from 'clsx';

type OuterContainerProps = HTMLProps<HTMLDivElement>;

const OuterContainer = forwardRef<HTMLDivElement, OuterContainerProps>(
  function OuterContainer({ className, children, ...props }, ref) {
    return (
      <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
        <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
      </div>
    );
  },
);

type InnerContainerProps = HTMLProps<HTMLDivElement>;

const InnerContainer = forwardRef<HTMLDivElement, InnerContainerProps>(
  function InnerContainer({ className, children, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
        {...props}
      >
        <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
      </div>
    );
  },
);

type ContainerProps = HTMLProps<HTMLDivElement>;

interface ContainerType
  extends React.ForwardRefExoticComponent<ContainerProps> {
  Outer: typeof OuterContainer;
  Inner: typeof InnerContainer;
  children?: React.ReactNode;
}

export const Container = forwardRef<HTMLDivElement, ContainerType>(
  function Container({ children, ...props }, ref) {
    return (
      <OuterContainer ref={ref} {...props}>
        <InnerContainer>{children}</InnerContainer>
      </OuterContainer>
    );
  },
) as ContainerType;

Container.Outer = OuterContainer;
Container.Inner = InnerContainer;
