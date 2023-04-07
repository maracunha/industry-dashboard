export interface Root {
  assets: Asset[]
  companies: Company[]
  units: Unit[]
  users: User[]
  workorders: Workorder[]
}

export interface Asset {
  assignedUserIds: number[]
  companyId: number
  healthHistory: HealthHistory[]
  healthscore: number
  id: number
  image: string
  metrics: Metrics
  model: string
  name: string
  sensors: string[]
  specifications: Specifications
  status: string
  unitId: number
}

export interface HealthHistory {
  status: string
  timestamp: string
}

export interface Metrics {
  lastUptimeAt: string
  totalCollectsUptime: number
  totalUptime: number
}

export interface Specifications {
  maxTemp: number
  power?: number
  rpm?: number
}

export interface Company {
  id: number
  name: string
}

export interface Unit {
  companyId: number
  id: number
  name: string
}

export interface User {
  companyId: number
  email: string
  id: number
  name: string
  unitId: number
}

export interface Workorder {
  assetId: number
  assignedUserIds: number[]
  checklist: Checklist[]
  description: string
  id: number
  priority: string
  status: string
  title: string
}

export interface Checklist {
  completed: boolean
  task: string
}

