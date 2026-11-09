export type ContentStatus = "published" | "pending";

export type ProgramLevel = "Undergraduate" | "Postgraduate" | "Diploma" | "Other";

export type Programme = {
  name: string;
  slug: string;
  level: ProgramLevel;
  summary?: string;
  status: ContentStatus;
};

export type StaffMember = {
  name: string;
  slug: string;
  title: string;
  status: ContentStatus;
};

export type Department = {
  name: string;
  slug: string;
  overview?: string;
  status: ContentStatus;
  programmes: Programme[];
  staff: StaffMember[];
};

export type College = {
  name: string;
  slug: string;
  description?: string;
  status: ContentStatus;
  departments: Department[];
};
