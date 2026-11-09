import type { College } from "@/types/university";

export const COLLEGES: College[] = [
  {
    name: "College of Engineering",
    slug: "engineering",
    description: "Engineering programmes and applied research.",
    status: "published",
    departments: [
      {
        name: "Agricultural and Bio-Resources Engineering",
        slug: "agricultural-and-bio-resources-engineering",
        status: "published",
        programmes: [
          {
            name: "Agricultural and Bio-Resources Engineering",
            slug: "agricultural-and-bio-resources-engineering",
            level: "Undergraduate",
            status: "published",
          },
        ],
        staff: [],
      },
      {
        name: "Civil Engineering",
        slug: "civil-engineering",
        status: "published",
        programmes: [
          {
            name: "Civil Engineering",
            slug: "civil-engineering",
            level: "Undergraduate",
            status: "published",
          },
        ],
        staff: [],
      },
      {
        name: "Mechanical Engineering",
        slug: "mechanical-engineering",
        status: "published",
        programmes: [
          {
            name: "Mechanical Engineering",
            slug: "mechanical-engineering",
            level: "Undergraduate",
            status: "published",
          },
        ],
        staff: [],
      },
      {
        name: "Mechatronics Engineering",
        slug: "mechatronics-engineering",
        status: "published",
        programmes: [
          {
            name: "Mechatronics Engineering",
            slug: "mechatronics-engineering",
            level: "Undergraduate",
            status: "published",
          },
        ],
        staff: [],
      },
      {
        name: "Electrical, Electronics and Telecommunications Engineering",
        slug: "electrical-electronics-and-telecommunications-engineering",
        status: "published",
        programmes: [
          {
            name: "Electrical and Electronics Engineering",
            slug: "electrical-and-electronics-engineering",
            level: "Undergraduate",
            status: "published",
          },
          {
            name: "Telecommunications Engineering",
            slug: "telecommunications-engineering",
            level: "Undergraduate",
            status: "published",
          },
          {
            name: "Computer Engineering",
            slug: "computer-engineering",
            level: "Undergraduate",
            status: "published",
          },
        ],
        staff: [],
      },
      {
        name: "Biomedical Engineering",
        slug: "biomedical-engineering",
        status: "pending",
        programmes: [
          {
            name: "Biomedical Engineering",
            slug: "biomedical-engineering",
            level: "Undergraduate",
            status: "published",
          },
        ],
        staff: [],
      },
    ],
  },
  {
    name: "College of Management Sciences",
    slug: "management-sciences",
    description: "Business and management programmes.",
    status: "published",
    departments: [
      {
        name: "Economics, Accounting and Finance",
        slug: "economics-accounting-and-finance",
        status: "published",
        programmes: [
          {
            name: "Accounting",
            slug: "accounting",
            level: "Undergraduate",
            status: "published",
          },
          {
            name: "Economics",
            slug: "economics",
            level: "Undergraduate",
            status: "published",
          },
          {
            name: "Finance and Banking",
            slug: "finance-and-banking",
            level: "Undergraduate",
            status: "published",
          },
        ],
        staff: [],
      },
      {
        name: "Business Administration",
        slug: "business-administration",
        status: "published",
        programmes: [
          {
            name: "Business Administration",
            slug: "business-administration",
            level: "Undergraduate",
            status: "published",
          },
          {
            name: "Human Resource Management",
            slug: "human-resource-management",
            level: "Undergraduate",
            status: "published",
          },
          {
            name: "Marketing",
            slug: "marketing",
            level: "Undergraduate",
            status: "published",
          },
          {
            name: "Business Computing",
            slug: "business-computing",
            level: "Undergraduate",
            status: "published",
          },
          {
            name: "International Business",
            slug: "international-business",
            level: "Undergraduate",
            status: "published",
          },
        ],
        staff: [],
      },
      {
        name: "Management Technology",
        slug: "management-technology",
        status: "published",
        programmes: [
          {
            name: "Project Management",
            slug: "project-management",
            level: "Undergraduate",
            status: "published",
          },
          {
            name: "Transport Management",
            slug: "transport-management",
            level: "Undergraduate",
            status: "published",
          },
        ],
        staff: [],
      },
    ],
  },
  {
    name: "College of Natural and Applied Sciences",
    slug: "natural-and-applied-sciences",
    description: "Science programmes across biological, chemical, and physical sciences.",
    status: "published",
    departments: [
      {
        name: "Biological Sciences",
        slug: "biological-sciences",
        status: "published",
        programmes: [
          {
            name: "Microbiology",
            slug: "microbiology",
            level: "Undergraduate",
            status: "published",
          },
          {
            name: "Biotechnology",
            slug: "biotechnology",
            level: "Undergraduate",
            status: "published",
          },
        ],
        staff: [],
      },
      {
        name: "Chemical and Food Sciences",
        slug: "chemical-and-food-sciences",
        status: "published",
        programmes: [
          {
            name: "Biochemistry",
            slug: "biochemistry",
            level: "Undergraduate",
            status: "published",
          },
          {
            name: "Industrial Chemistry",
            slug: "industrial-chemistry",
            level: "Undergraduate",
            status: "published",
          },
        ],
        staff: [],
      },
      {
        name: "Physical Sciences",
        slug: "physical-sciences",
        status: "published",
        programmes: [
          {
            name: "Physics",
            slug: "physics",
            level: "Undergraduate",
            status: "published",
          },
          {
            name: "Physics with Electronics",
            slug: "physics-with-electronics",
            level: "Undergraduate",
            status: "published",
          },
          {
            name: "Applied Mathematics",
            slug: "applied-mathematics",
            level: "Undergraduate",
            status: "published",
          },
          {
            name: "Statistics",
            slug: "statistics",
            level: "Undergraduate",
            status: "published",
          },
          {
            name: "Applied Geophysics",
            slug: "applied-geophysics",
            level: "Undergraduate",
            status: "published",
          },
          {
            name: "Medical Physics",
            slug: "medical-physics",
            level: "Undergraduate",
            status: "published",
          },
        ],
        staff: [],
      },
    ],
  },
  {
    name: "College of Computing",
    slug: "computing",
    description:
      "Computing programmes with focus on software, cybersecurity, and data-driven innovation.",
    status: "published",
    departments: [
      {
        name: "Computing",
        slug: "computing",
        status: "published",
        programmes: [
          {
            name: "Computer Science",
            slug: "computer-science",
            level: "Undergraduate",
            status: "published",
          },
          {
            name: "Information Technology",
            slug: "information-technology",
            level: "Undergraduate",
            status: "published",
          },
          {
            name: "Software Engineering",
            slug: "software-engineering",
            level: "Undergraduate",
            status: "published",
          },
          {
            name: "Cyber Security",
            slug: "cyber-security",
            level: "Undergraduate",
            status: "published",
          },
          {
            name: "Data Science",
            slug: "data-science",
            level: "Undergraduate",
            status: "published",
          },
        ],
        staff: [],
      },
    ],
  },
  {
    name: "College of Food, Agricultural Science and Technology",
    slug: "food-agric-science-and-technology",
    description:
      "Food science, nutrition, and agriculture programmes designed for national development.",
    status: "published",
    departments: [
      {
        name: "Food Science and Technology",
        slug: "food-science-and-technology",
        status: "published",
        programmes: [
          {
            name: "Food Technology",
            slug: "food-technology",
            level: "Undergraduate",
            status: "published",
          },
          {
            name: "Nutrition and Dietetics",
            slug: "nutrition-and-dietetics",
            level: "Undergraduate",
            status: "published",
          },
        ],
        staff: [],
      },
      {
        name: "Agriculture and Agricultural Technology",
        slug: "agriculture-and-agricultural-technology",
        status: "published",
        programmes: [
          {
            name: "Agriculture and Agricultural Technology",
            slug: "agriculture-and-agricultural-technology",
            level: "Undergraduate",
            status: "published",
          },
          {
            name: "Agriculture (Agronomy)",
            slug: "agriculture-agronomy",
            level: "Undergraduate",
            status: "published",
          },
          {
            name: "Agriculture (Agribusiness)",
            slug: "agriculture-agribusiness",
            level: "Undergraduate",
            status: "published",
          },
          {
            name: "Agriculture (Fisheries and Animal Science)",
            slug: "agriculture-fisheries-and-animal-science",
            level: "Undergraduate",
            status: "published",
          },
        ],
        staff: [],
      },
    ],
  },
  {
    name: "College of Environmental Sciences",
    slug: "environmental-sciences",
    description:
      "Built environment disciplines focused on sustainability, design, and planning.",
    status: "published",
    departments: [
      {
        name: "Architecture",
        slug: "architecture",
        status: "published",
        programmes: [
          {
            name: "Architecture",
            slug: "architecture",
            level: "Undergraduate",
            status: "published",
          },
        ],
        staff: [],
      },
      {
        name: "Building Technology",
        slug: "building-technology",
        status: "published",
        programmes: [
          {
            name: "Building Technology",
            slug: "building-technology",
            level: "Undergraduate",
            status: "published",
          },
        ],
        staff: [],
      },
      {
        name: "Estate Management",
        slug: "estate-management",
        status: "published",
        programmes: [
          {
            name: "Estate Management",
            slug: "estate-management",
            level: "Undergraduate",
            status: "published",
          },
        ],
        staff: [],
      },
      {
        name: "Quantity Surveying",
        slug: "quantity-surveying",
        status: "published",
        programmes: [
          {
            name: "Quantity Surveying",
            slug: "quantity-surveying",
            level: "Undergraduate",
            status: "published",
          },
        ],
        staff: [],
      },
      {
        name: "Surveying and Geo-informatics",
        slug: "surveying-and-geo-informatics",
        status: "published",
        programmes: [
          {
            name: "Surveying and Geo-informatics",
            slug: "surveying-and-geo-informatics",
            level: "Undergraduate",
            status: "published",
          },
        ],
        staff: [],
      },
      {
        name: "Urban and Regional Planning",
        slug: "urban-and-regional-planning",
        status: "published",
        programmes: [
          {
            name: "Urban and Regional Planning",
            slug: "urban-and-regional-planning",
            level: "Undergraduate",
            status: "published",
          },
        ],
        staff: [],
      },
      {
        name: "Environmental Management",
        slug: "environmental-management",
        status: "pending",
        programmes: [
          {
            name: "Environmental Management",
            slug: "environmental-management",
            level: "Undergraduate",
            status: "published",
          },
        ],
        staff: [],
      },
    ],
  },
];

export function getCollegeBySlug(slug: string): College | undefined {
  return COLLEGES.find((c) => c.slug === slug);
}

export function getDepartmentBySlugs(params: {
  collegeSlug: string;
  departmentSlug: string;
}) {
  const college = getCollegeBySlug(params.collegeSlug);
  const department = college?.departments.find((d) => d.slug === params.departmentSlug);
  return { college, department };
}
