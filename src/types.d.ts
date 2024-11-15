import type {
  Asset,
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode
} from 'contentful'

export interface TypeFeatureFields {
  icon: EntryFieldTypes.Symbol
  title: EntryFieldTypes.Symbol
  description: EntryFieldTypes.Text
}

export type TypeFeatureSkeleton = EntrySkeletonType<
  TypeFeatureFields,
  'feature'
>
export type TypeFeature<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeFeatureSkeleton, Modifiers, Locales>

export interface TypeFeaturesFields {
  title: EntryFieldTypes.Symbol
  description: EntryFieldTypes.Text
  features: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeFeatureSkeleton>
  >
}

export type TypeFeaturesSkeleton = EntrySkeletonType<
  TypeFeaturesFields,
  'features'
>
export type TypeFeatures<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeFeaturesSkeleton, Modifiers, Locales>

export interface TypeHeroFields {
  title: EntryFieldTypes.Symbol
  content: EntryFieldTypes.Text
  image: EntryFieldTypes.AssetLink<Asset>
  buttonLabel: EntryFieldTypes.Symbol
  buttonLink: EntryFieldTypes.Symbol
  showButton: EntryFieldTypes.Boolean
}

export type TypeHeroSkeleton = EntrySkeletonType<TypeHeroFields, 'hero'>
export type TypeHero<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeHeroSkeleton, Modifiers, Locales>

export interface TypeImageBlockFields {
  description: EntryFieldTypes.Text
  backgroundImage?: EntryFieldTypes.AssetLink<Asset>
}

export type TypeImageBlockSkeleton = EntrySkeletonType<
  TypeImageBlockFields,
  'imageBlock'
>
export type TypeImageBlock<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeImageBlockSkeleton, Modifiers, Locales>

export interface TypeTextBlockFields {
  title: EntryFieldTypes.Symbol
  description: EntryFieldTypes.Text
  label: EntryFieldTypes.Symbol
  destination: EntryFieldTypes.Symbol
}

export type TypeTextBlockSkeleton = EntrySkeletonType<
  TypeTextBlockFields,
  'textBlock'
>
export type TypeTextBlock<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeTextBlockSkeleton, Modifiers, Locales>

export interface TypePageHeaderFields {
  title: EntryFieldTypes.Symbol
  description: EntryFieldTypes.Text
}

export type TypePageHeaderSkeleton = EntrySkeletonType<
  TypePageHeaderFields,
  'pageHeader'
>
export type TypePageHeader<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypePageHeaderSkeleton, Modifiers, Locales>

export interface TypeCourseFields {
  di: EntryFieldTypes.Text
  title: EntryFieldTypes.Symbol
  description: EntryFieldTypes.Text
  image: EntryFieldTypes.AssetLink
}

export interface TypeFileFields {
  name: EntryFieldTypes.Symbol
  file: EntryFieldTypes.AssetLink
}

export type TypeCourseSkeleton = EntrySkeletonType<TypeCourseFields, 'course'>
export type TypeCourse<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeCourseSkeleton, Modifiers, Locales>
