export interface Testimonials {
    id: number
    image: string
    message: string
    name: string
    cohort: string
}

export interface ProgramStructure {
  duration: string
  format: string
  content: string[]
}

export interface ProgramPackage {
  id: string
  title: string
  price: string
  features?: string[]
  targetAudience?: string[]
  structure?: ProgramStructure
  interactive?: string[]
}

export interface ProgramLevel {
  packages: ProgramPackage[]
  additionalFeatures?: string[]
}

export interface ProgramData {
  beginners: ProgramLevel
  intermediate: ProgramLevel
}
