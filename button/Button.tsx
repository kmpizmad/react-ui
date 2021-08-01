import * as React from "react";
import "./Button.scss";

interface Props {
  colors?: {
    background: string;
    text: string;
    ring: string;
    hover: string;
  };
  variation?: "contained" | "outlined" | "text";
  external?: boolean;
}

export type ButtonProps = Readonly<Props> &
  React.ButtonHTMLAttributes<any> &
  React.AnchorHTMLAttributes<any>;

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    colors,
    variation,
    href,
    external,
    target,
    tabIndex,
    children,
    onMouseOver,
    onMouseLeave,
    onFocus,
    onBlur,
    ...rest
  } = props;

  const link = href && (href.startsWith("/") || external) ? href : "/" + href;
  const linkTarget = target || "_blank";
  const tabindex = tabIndex || rest.disabled ? -1 : 0;
  const variant = variation || "contained";
  const classes = className ? className : "";
  const btnClasses = `Button ${variant} ${classes}`.trim();
  const style = {
    backgroundColor: colors?.background,
    color: colors?.text,
    ...rest.style,
  };

  const changeBackground = (
    color: string,
    event: React.MouseEventHandler<any> | undefined
  ) => {
    return (e: React.MouseEvent<any, MouseEvent>) => {
      const target = e.target as HTMLElement;
      target.style.backgroundColor = color;

      if (event) event(e);
    };
  };

  const changeShadow = (
    shadow: string,
    event: React.FocusEventHandler<any> | undefined
  ) => {
    return (e: React.FocusEvent<any>) => {
      const target = e.target as HTMLElement;
      if (colors) target.style.boxShadow = shadow;

      if (event) event(e);
    };
  };

  return href ? (
    <a
      {...rest}
      href={link}
      target={linkTarget}
      tabIndex={tabindex}
      className={btnClasses}
      style={style}
      onMouseOver={changeBackground(colors?.hover!, onMouseOver)}
      onMouseLeave={changeBackground(colors?.background!, onMouseLeave)}
      onFocus={changeShadow(`0 0 0 3px ${colors?.ring}`, onFocus)}
      onBlur={changeShadow("", onBlur)}
    >
      {children}
    </a>
  ) : (
    <button
      {...rest}
      tabIndex={tabindex}
      className={btnClasses}
      style={style}
      onMouseOver={changeBackground(colors?.hover!, onMouseOver)}
      onMouseLeave={changeBackground(colors?.background!, onMouseLeave)}
      onFocus={changeShadow(`0 0 0 3px ${colors?.ring}`, onFocus)}
      onBlur={changeShadow("", onBlur)}
    >
      {children}
    </button>
  );
};
