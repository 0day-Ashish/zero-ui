import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';
import { LucideIcon } from 'lucide-react';

declare const buttonSizes: {
    sm: string;
    md: string;
    lg: string;
    icon: string;
};
interface ButtonBasicProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost" | "destructive" | "link" | "secondary";
    size?: "sm" | "md" | "lg" | "icon";
    children: React.ReactNode;
}
declare function Button({ variant, size, children, className, ...props }: ButtonBasicProps): react_jsx_runtime.JSX.Element;

interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    color?: "default" | "heart" | "flame" | "star" | "success" | "info";
    isActive?: boolean;
    children: React.ReactNode;
}
declare function ButtonIcon({ variant, size, color, isActive, children, className, ...props }: ButtonIconProps): react_jsx_runtime.JSX.Element;

interface ButtonLoadingProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    loadingVariant?: "spinner" | "dots" | "pulse";
    isLoading?: boolean;
    isCompleted?: boolean;
    completedText?: string;
    children: React.ReactNode;
}
declare function ButtonLoading({ variant, size, loadingVariant, isLoading, isCompleted, completedText, children, className, disabled, ...props }: ButtonLoadingProps): react_jsx_runtime.JSX.Element;

interface ButtonGroupProps {
    variant?: "default" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    orientation?: "horizontal" | "vertical";
    children: React.ReactNode;
    className?: string;
}
interface ButtonGroupItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isActive?: boolean;
    children: React.ReactNode;
}
declare function ButtonGroupItem({ isActive, children, className, ...props }: ButtonGroupItemProps): react_jsx_runtime.JSX.Element;
declare function ButtonGroup({ variant, size, orientation, children, className, }: ButtonGroupProps): react_jsx_runtime.JSX.Element;
declare namespace ButtonGroup {
    var Item: typeof ButtonGroupItem;
}

type SocialProvider = "google" | "github" | "twitter" | "facebook" | "apple" | "discord" | "linkedin" | "spotify";
interface ButtonSocialProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    provider: SocialProvider;
    variant?: "default" | "outline" | "icon";
    size?: "sm" | "md" | "lg";
    children?: React.ReactNode;
}
declare function ButtonSocial({ provider, variant, size, children, className, ...props }: ButtonSocialProps): react_jsx_runtime.JSX.Element;

type NoiseEffect = "none" | "grain" | "perlin" | "animated";
type CursorEffect = "none" | "ripple" | "glow" | "spotlight";
type BorderEffect = "none" | "rotating" | "pulsing" | "spectrum" | "glow";
type GradientPreset = "purple-blue" | "orange-red" | "green-teal" | "pink-purple" | "custom";
type Size$1 = "sm" | "md" | "lg";
interface ButtonGradientProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: Size$1;
    gradient?: GradientPreset;
    gradientFrom?: string;
    gradientTo?: string;
    gradientVia?: string;
    noiseEffect?: NoiseEffect;
    noiseOpacity?: number;
    cursorEffect?: CursorEffect;
    borderEffect?: BorderEffect;
    children: React.ReactNode;
}
declare function ButtonGradient({ size, gradient, gradientFrom, gradientTo, gradientVia, noiseEffect, noiseOpacity, cursorEffect, borderEffect, children, className, onClick, disabled, ...props }: ButtonGradientProps): react_jsx_runtime.JSX.Element;

type Size = "sm" | "md" | "lg";
type GlassVariant = "default" | "secondary" | "dark";
interface ButtonGlassProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: Size;
    variant?: GlassVariant;
    children: React.ReactNode;
}
declare function ButtonGlass({ size, variant, children, className, disabled, ...props }: ButtonGlassProps): react_jsx_runtime.JSX.Element;

interface Button3DProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "inverse" | "outline";
    children: React.ReactNode;
}
declare function Button3D({ variant, children, className, ...props }: Button3DProps): react_jsx_runtime.JSX.Element;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    helperText?: string;
    error?: boolean;
    variant?: "default" | "filled" | "underscore";
}
declare const InputBase: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

interface InputFloatingProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: boolean;
}
declare const InputFloating: React.ForwardRefExoticComponent<InputFloatingProps & React.RefAttributes<HTMLInputElement>>;

interface InputIconProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: LucideIcon;
    iconPosition?: "left" | "right";
    iconClassName?: string;
    error?: boolean;
}
declare const InputIcon: React.ForwardRefExoticComponent<InputIconProps & React.RefAttributes<HTMLInputElement>>;

interface InputGradientProps extends React.InputHTMLAttributes<HTMLInputElement> {
    wrapperClassName?: string;
    gradientFrom?: string;
    gradientTo?: string;
}
declare const InputGradient: React.ForwardRefExoticComponent<InputGradientProps & React.RefAttributes<HTMLInputElement>>;

interface InputOTPProps {
    length?: number;
    onComplete?: (otp: string) => void;
    className?: string;
    onChange?: (otp: string) => void;
}
declare function InputOTP({ length, onComplete, className, onChange, }: InputOTPProps): react_jsx_runtime.JSX.Element;

interface InputFileProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    helperText?: string;
    onFileSelect?: (file: File | null) => void;
    accept?: string;
}
declare function InputFile({ className, label, helperText, onFileSelect, accept, ...props }: InputFileProps): react_jsx_runtime.JSX.Element;

interface InputTagsProps {
    label?: string;
    helperText?: string;
    placeholder?: string;
    onChange?: (tags: string[]) => void;
    className?: string;
    defaultValue?: string[];
    maxTags?: number;
}
declare function InputTags({ label, helperText, placeholder, onChange, className, defaultValue, maxTags, }: InputTagsProps): react_jsx_runtime.JSX.Element;

interface TextareaAutoProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    helperText?: string;
    minRows?: number;
    maxRows?: number;
}
declare function TextareaAuto({ className, label, helperText, minRows, maxRows, onChange, value, ...props }: TextareaAutoProps): react_jsx_runtime.JSX.Element;

type TooltipPosition = "top" | "bottom" | "left" | "right";
interface TooltipBaseProps {
    content: string;
    children: React.ReactNode;
    position?: TooltipPosition;
    className?: string;
    wrapperClassName?: string;
}
declare function TooltipBase({ content, children, position, className, wrapperClassName, }: TooltipBaseProps): react_jsx_runtime.JSX.Element;

interface TooltipGlassProps {
    content: string;
    children: React.ReactNode;
    position?: TooltipPosition;
    className?: string;
}
declare function TooltipGlass({ content, children, position, className, }: TooltipGlassProps): react_jsx_runtime.JSX.Element;

interface TooltipNeonProps {
    content: string;
    children: React.ReactNode;
    position?: TooltipPosition;
    className?: string;
    color?: "violet" | "cyan" | "pink";
}
declare function TooltipNeon({ content, children, position, className, color, }: TooltipNeonProps): react_jsx_runtime.JSX.Element;

interface TooltipMinimalProps {
    content: string;
    children: React.ReactNode;
    position?: TooltipPosition;
    className?: string;
}
declare function TooltipMinimal({ content, children, position, className, }: TooltipMinimalProps): react_jsx_runtime.JSX.Element;

interface TooltipHologramProps {
    content: string;
    children: React.ReactNode;
    position?: "top" | "bottom" | "left" | "right";
    className?: string;
}
declare function TooltipHologram({ content, children, position, className, }: TooltipHologramProps): react_jsx_runtime.JSX.Element;

interface TooltipGlitchProps {
    content: string;
    children: React.ReactNode;
    position?: "top" | "bottom" | "left" | "right";
    className?: string;
}
declare function TooltipGlitch({ content, children, position, className, }: TooltipGlitchProps): react_jsx_runtime.JSX.Element;

interface TooltipSmartProps {
    content: string;
    children: React.ReactNode;
    className?: string;
}
declare function TooltipSmart({ content, children, className, }: TooltipSmartProps): react_jsx_runtime.JSX.Element;

interface TabsProps {
    defaultValue: string;
    className?: string;
    children: React.ReactNode;
}
interface TabsListProps {
    children: React.ReactNode;
    className?: string;
}
interface TabsTriggerProps {
    value: string;
    children: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
}
interface TabsContentProps {
    value: string;
    children: React.ReactNode;
    className?: string;
}
declare function Tabs({ defaultValue, className, children }: TabsProps): react_jsx_runtime.JSX.Element;
declare function TabsList({ children, className }: TabsListProps): react_jsx_runtime.JSX.Element;
declare function TabsTrigger({ value, children, className, icon }: TabsTriggerProps): react_jsx_runtime.JSX.Element;
declare function TabsContent({ value, children, className }: TabsContentProps): react_jsx_runtime.JSX.Element | null;

interface TabsGlassProps {
    defaultValue: string;
    className?: string;
    children: React.ReactNode;
}
declare function TabsGlass({ defaultValue, className, children }: TabsGlassProps): react_jsx_runtime.JSX.Element;
declare function TabsGlassList({ children, className }: {
    children: React.ReactNode;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function TabsGlassTrigger({ value, children, className, icon }: {
    value: string;
    children: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function TabsGlassContent({ value, children, className }: {
    value: string;
    children: React.ReactNode;
    className?: string;
}): react_jsx_runtime.JSX.Element | null;

interface TabsNeonProps {
    defaultValue: string;
    className?: string;
    children: React.ReactNode;
}
declare function TabsNeon({ defaultValue, className, children }: TabsNeonProps): react_jsx_runtime.JSX.Element;
declare function TabsNeonList({ children, className }: {
    children: React.ReactNode;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function TabsNeonTrigger({ value, children, className }: {
    value: string;
    children: React.ReactNode;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function TabsNeonContent({ value, children, className }: {
    value: string;
    children: React.ReactNode;
    className?: string;
}): react_jsx_runtime.JSX.Element | null;

interface TabsCyberProps {
    defaultValue: string;
    className?: string;
    children: React.ReactNode;
}
declare function TabsCyber({ defaultValue, className, children }: TabsCyberProps): react_jsx_runtime.JSX.Element;
declare function TabsCyberList({ children, className }: {
    children: React.ReactNode;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function TabsCyberTrigger({ value, children, className }: {
    value: string;
    children: React.ReactNode;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function TabsCyberContent({ value, children, className }: {
    value: string;
    children: React.ReactNode;
    className?: string;
}): react_jsx_runtime.JSX.Element | null;

type PaginationLinkProps = {
    isActive?: boolean;
    size?: keyof typeof buttonSizes;
} & React.ComponentProps<"a">;
declare const PaginationLink: {
    ({ className, isActive, size, ...props }: PaginationLinkProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const Pagination: {
    ({ className, ...props }: React.ComponentProps<"nav">): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const PaginationContent: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & React.RefAttributes<HTMLUListElement>>;
declare const PaginationItem: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React.RefAttributes<HTMLLIElement>>;
declare const PaginationPrevious: {
    ({ className, ...props }: React.ComponentProps<typeof PaginationLink>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const PaginationNext: {
    ({ className, ...props }: React.ComponentProps<typeof PaginationLink>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const PaginationEllipsis: {
    ({ className, ...props }: React.ComponentProps<"span">): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const PaginationGlass: ({ className, ...props }: React.ComponentProps<"nav">) => react_jsx_runtime.JSX.Element;
declare const PaginationGlassContent: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & React.RefAttributes<HTMLUListElement>>;
declare const PaginationGlassItem: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React.RefAttributes<HTMLLIElement>>;
interface PaginationGlassLinkProps extends React.ComponentProps<"a"> {
    isActive?: boolean;
}
declare const PaginationGlassLink: ({ className, isActive, children, ...props }: PaginationGlassLinkProps) => react_jsx_runtime.JSX.Element;
declare const PaginationGlassPrevious: ({ className, ...props }: React.ComponentProps<typeof PaginationGlassLink>) => react_jsx_runtime.JSX.Element;
declare const PaginationGlassNext: ({ className, ...props }: React.ComponentProps<typeof PaginationGlassLink>) => react_jsx_runtime.JSX.Element;
declare const PaginationGlassEllipsis: ({ className, ...props }: React.ComponentProps<"span">) => react_jsx_runtime.JSX.Element;

declare const PaginationNeon: ({ className, ...props }: React.ComponentProps<"nav">) => react_jsx_runtime.JSX.Element;
declare const PaginationNeonContent: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & React.RefAttributes<HTMLUListElement>>;
declare const PaginationNeonItem: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React.RefAttributes<HTMLLIElement>>;
interface PaginationNeonLinkProps extends React.ComponentProps<"a"> {
    isActive?: boolean;
}
declare const PaginationNeonLink: ({ className, isActive, children, ...props }: PaginationNeonLinkProps) => react_jsx_runtime.JSX.Element;
declare const PaginationNeonPrevious: ({ className, ...props }: React.ComponentProps<typeof PaginationNeonLink>) => react_jsx_runtime.JSX.Element;
declare const PaginationNeonNext: ({ className, ...props }: React.ComponentProps<typeof PaginationNeonLink>) => react_jsx_runtime.JSX.Element;
declare const PaginationNeonEllipsis: ({ className, ...props }: React.ComponentProps<"span">) => react_jsx_runtime.JSX.Element;

/**
 * Re-using the clip-path utility we added to globals.css
 * .clip-path-slant { clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px); }
 */
declare const PaginationCyber: ({ className, ...props }: React.ComponentProps<"nav">) => react_jsx_runtime.JSX.Element;
declare const PaginationCyberContent: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & React.RefAttributes<HTMLUListElement>>;
declare const PaginationCyberItem: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React.RefAttributes<HTMLLIElement>>;
interface PaginationCyberLinkProps extends React.ComponentProps<"a"> {
    isActive?: boolean;
}
declare const PaginationCyberLink: ({ className, isActive, children, ...props }: PaginationCyberLinkProps) => react_jsx_runtime.JSX.Element;
declare const PaginationCyberPrevious: ({ className, ...props }: React.ComponentProps<typeof PaginationCyberLink>) => react_jsx_runtime.JSX.Element;
declare const PaginationCyberNext: ({ className, ...props }: React.ComponentProps<typeof PaginationCyberLink>) => react_jsx_runtime.JSX.Element;
declare const PaginationCyberEllipsis: ({ className, ...props }: React.ComponentProps<"span">) => react_jsx_runtime.JSX.Element;

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    defaultOpen?: boolean;
}
declare function AccordionBase({ title, children, className, defaultOpen }: AccordionItemProps): react_jsx_runtime.JSX.Element;

interface AccordionGlassProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    defaultOpen?: boolean;
}
declare function AccordionGlass({ title, children, className, defaultOpen }: AccordionGlassProps): react_jsx_runtime.JSX.Element;

interface AccordionNeonProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    defaultOpen?: boolean;
}
declare function AccordionNeon({ title, children, className, defaultOpen }: AccordionNeonProps): react_jsx_runtime.JSX.Element;

interface AccordionCyberProps {
    title: string;
    id: string;
    children: React.ReactNode;
    className?: string;
    defaultOpen?: boolean;
}
declare function AccordionCyber({ title, id, children, className, defaultOpen }: AccordionCyberProps): react_jsx_runtime.JSX.Element;

interface AccordionSpringProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    defaultOpen?: boolean;
}
declare function AccordionSpring({ title, children, className, defaultOpen }: AccordionSpringProps): react_jsx_runtime.JSX.Element;

interface AccordionBorderProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    defaultOpen?: boolean;
}
declare function AccordionBorder({ title, children, className, defaultOpen }: AccordionBorderProps): react_jsx_runtime.JSX.Element;

interface AccordionImageProps {
    items: {
        id: string | number;
        title: string;
        description: string;
        image: string;
    }[];
    className?: string;
}
declare function AccordionImage({ items, className }: AccordionImageProps): react_jsx_runtime.JSX.Element;

export { AccordionBase, AccordionBorder, AccordionCyber, AccordionGlass, AccordionImage, AccordionNeon, AccordionSpring, Button, Button3D, ButtonGlass, ButtonGradient, ButtonGroup, ButtonIcon, ButtonLoading, ButtonSocial, InputBase, InputFile, InputFloating, InputGradient, InputIcon, InputOTP, InputTags, Pagination, PaginationContent, PaginationCyber, PaginationCyberContent, PaginationCyberEllipsis, PaginationCyberItem, PaginationCyberLink, PaginationCyberNext, PaginationCyberPrevious, PaginationEllipsis, PaginationGlass, PaginationGlassContent, PaginationGlassEllipsis, PaginationGlassItem, PaginationGlassLink, PaginationGlassNext, PaginationGlassPrevious, PaginationItem, PaginationLink, PaginationNeon, PaginationNeonContent, PaginationNeonEllipsis, PaginationNeonItem, PaginationNeonLink, PaginationNeonNext, PaginationNeonPrevious, PaginationNext, PaginationPrevious, Tabs, TabsContent, TabsCyber, TabsCyberContent, TabsCyberList, TabsCyberTrigger, TabsGlass, TabsGlassContent, TabsGlassList, TabsGlassTrigger, TabsList, TabsNeon, TabsNeonContent, TabsNeonList, TabsNeonTrigger, TabsTrigger, TextareaAuto, TooltipBase, TooltipGlass, TooltipGlitch, TooltipHologram, TooltipMinimal, TooltipNeon, TooltipSmart };
