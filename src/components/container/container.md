Imported React as well as HTMLProps from react module.

Defined types for props for each of the components, such as OuterContainerProps, InnerContainerProps, and ContainerProps, which extends HTMLProps<HTMLDivElement>.

Specified the types for ref using React.ForwardRefExoticComponent.

Defined an interface ContainerType, which extends React.ForwardRefExoticComponent<ContainerProps>, and adds two additional properties: Outer and Inner.

Exported Container as ContainerType.

Replaced {...props} with ...rest in the function parameter, which is a common pattern to handle props spread.

Used the as keyword to assign the ContainerType to Container to allow exporting the Outer and Inner properties.
