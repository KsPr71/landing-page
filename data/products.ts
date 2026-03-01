export interface Product {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  imageUrl: string;
  category: string;
  technologies: string[];
}

export const products: Product[] = [
  {
    id: "nova-crm",
    title: "NovaCRM",
    tagline: "Gestión de clientes inteligente para equipos de alto rendimiento.",
    description: "NovaCRM centraliza toda la comunicación con tus clientes, automatiza el seguimiento de ventas y proporciona analíticas predictivas impulsadas por IA para cerrar más tratos en menos tiempo. Diseñado específicamente para empresas B2B que buscan escalar sus operaciones comerciales sin fricción.",
    features: [
      "Pipeline de ventas visual y personalizable",
      "Automatización de correos electrónicos y seguimientos",
      "Analíticas predictivas de cierre de ventas",
      "Integración nativa con herramientas de calendario y mail"
    ],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3",
    category: "SaaS / Empresarial",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis"]
  },
  {
    id: "fintrack-pro",
    title: "FinTrack Pro",
    tagline: "El motor financiero para startups y PYMES modernas.",
    description: "Una plataforma integral que simplifica la gestión financiera corporativa. FinTrack Pro ofrece conciliación bancaria en tiempo real, emisión de facturas automatizada, y proyecciones de flujo de caja que permiten a los directores financieros tomar decisiones basadas en datos precisos e instantáneos.",
    features: [
      "Conciliación bancaria multi-moneda",
      "Dashboard de flujo de caja en tiempo real",
      "Gestión de gastos de empleados",
      "Reportes fiscales automatizados"
    ],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    category: "Fintech",
    technologies: ["TypeScript", "Next.js", "Go", "AWS"]
  },
  {
    id: "educonnect",
    title: "EduConnect",
    tagline: "Transformando la educación a través de la conectividad digital.",
    description: "El sistema de gestión de aprendizaje (LMS) definitivo para instituciones modernas. EduConnect facilita la interacción entre profesores, alumnos y padres, ofreciendo aulas virtuales interactiva, seguimiento de calificaciones avanzado y herramientas de colaboración en tiempo real.",
    features: [
      "Aulas virtuales con videoconferencia integrada",
      "Sistema de evaluación gamificado",
      "Portal para padres con alertas en tiempo real",
      "Gestión documental para recursos educativos"
    ],
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    category: "EdTech",
    technologies: ["Vue.js", "Python", "Django", "PostgreSQL"]
  },
  {
    id: "nova-health",
    title: "NovaHealth API",
    tagline: "Infraestructura segura para datos de salud.",
    description: "Una suite de APIs robusta y compatible con HIPAA/GDPR diseñada para que desarrolladores construyan aplicaciones de salud digital de manera rápida y segura. NovaHealth maneja la interoperabilidad de registros médicos electrónicos (EHR) de manera transparente.",
    features: [
      "Cumplimiento normativo HIPAA y GDPR por defecto",
      "Endpoints GraphQL y RESTful",
      "Gestión de consentimiento de pacientes",
      "Webhooks para eventos médicos en tiempo real"
    ],
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    category: "HealthTech / API",
    technologies: ["GraphQL", "Rust", "Kubernetes", "Supabase"]
  }
];