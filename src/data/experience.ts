import type { Employer } from './types'

export const experience: Employer[] = [
  {
    company: 'IBM',
    role: 'Senior Application Consultant / AI Engineer',
    period: 'Nov 2020 – Present',
    location: 'Bengaluru, India',
    note: 'Client engagements delivered through IBM',
    engagements: [
      {
        client: 'Shell',
        project: 'Enterprise RAG, Agent API Platform & Reliability Multi-Agent System',
        period: 'Apr 2026 – Present',
        highlight:
          'Architected an autonomous reliability multi-agent system on Azure AI Foundry with 95%+ retrieval accuracy and extraction precision.',
        bullets: [
          'Engineered a coordinated multi-agent workflow to automate equipment health diagnostics, analyze failure modes (FMEA/FMECA), and evaluate Functional Locations (FLOC) by orchestrating specialized domain agents.',
          'Interfaced agentic workflows with enterprise CMMS / SAP PM, automating root-cause insights, dynamic mitigation plans, and preventive maintenance recommendations for planners and reliability engineers.',
          'Architected and deployed an end-to-end, production-grade Agent API platform and RAG pipeline using Azure AI Foundry for high-precision knowledge discovery across complex engineering artifacts.',
          'Built scalable ingestion pipelines covering multi-format technical manual parsing, semantic chunking, and high-dimensional vector embeddings, achieving 95%+ retrieval accuracy and extraction precision.',
          'Implemented an enterprise-grade AI evaluation framework benchmarking groundedness, context relevance, answer completeness, and hallucination metrics.',
          'Conducted AI red teaming against prompt injection and data exfiltration; automated CI/CD and built real-time telemetry dashboards for latency, token usage, and system health.',
        ],
        stack: ['Azure AI Foundry', 'Azure OpenAI (GPT-4o)', 'LangGraph', 'LangChain', 'Python', 'SAP PM APIs', 'Azure AI Search', 'Docker', 'Vector DBs', 'CI/CD'],
      },
      {
        client: 'Legal & General',
        project: 'Agentic Voice & Knowledge Search Platform',
        period: 'Nov 2025 – Mar 2026',
        highlight:
          'Built an agentic conversation-intelligence platform with sub-second real-time speech-to-text for live customer support.',
        bullets: [
          'Architected an enterprise agentic AI conversation intelligence platform using Python, Azure OpenAI, LangChain, and Azure AI Search for live customer-support operations.',
          'Engineered real-time audio streaming ingestion over WebSockets integrated with Azure Speech Services for sub-second speech-to-text transcription.',
          'Implemented autonomous multi-agent workflows for intent classification, call summarization, disposition tagging, and Next Best Action CRM case automation.',
          'Built event-driven, high-concurrency microservices using Azure Event Hubs and serverless Azure Functions to process high-volume live conversation telemetry.',
        ],
        stack: ['Python', 'Azure OpenAI', 'LangChain', 'Azure AI Search', 'Azure Speech', 'WebSockets', 'Event Hubs', 'Azure Functions'],
      },
      {
        client: 'Halliburton',
        project: 'Enterprise Copilot & Microsoft Fabric Data Pipelines',
        period: 'Aug 2025 – Nov 2025',
        highlight: 'Integrated Microsoft Copilot extensibility and high-throughput Fabric ingestion pipelines into enterprise applications.',
        bullets: [
          'Engineered enterprise AI capabilities leveraging Microsoft Copilot Extensibility, integrating intelligent AI workflows into internal applications.',
          'Designed Azure AI Search architecture for indexing and contextual retrieval of operational data and unstructured engineering knowledge.',
          'Built high-throughput distributed ingestion pipelines using Microsoft Fabric and Python multi-threading, accelerating large-scale document indexing.',
        ],
        stack: ['Copilot Extensibility', 'Azure AI Search', 'Microsoft Fabric', 'Python'],
      },
      {
        client: 'Ballard Spahr',
        project: 'AI Legal Communications Analysis & Triage',
        period: 'Jun 2025 – Aug 2025',
        highlight: 'Developed an LLM-powered legal email triage pipeline for priority, importance and required actions.',
        bullets: [
          'Developed an AI-powered legal email triage pipeline using LLMs and NLP to evaluate incoming correspondence for priority, importance, and required actions.',
          'Engineered structured entity and metadata extraction from legal communications while adhering to rigorous compliance and privacy standards.',
        ],
        stack: ['LLMs', 'NLP', 'Python', 'Entity Extraction'],
      },
      {
        client: 'Ernst & Young (EY – AIFS)',
        project: 'AI-Powered Financial Document Review Platform',
        period: 'Jan 2024 – Mar 2024 & Feb 2025 – Jun 2025',
        highlight: 'Enforced 100% compliance with financial rules using Chain-of-Thought prompting and JSON schema validation.',
        bullets: [
          'Designed and implemented secure RESTful APIs using FastAPI and Python for the complete financial document lifecycle (upload, rule execution, insights retrieval).',
          'Implemented Chain-of-Thought prompt engineering and JSON schema validations, minimizing hallucinations and enforcing 100% compliance with financial rules.',
          'Engineered custom chunking, metadata extraction, and indexing using Azure AI Search and Document Intelligence, secured via Managed Identity and Key Vault.',
        ],
        stack: ['FastAPI', 'Python', 'Azure OpenAI', 'Azure AI Search', 'Document Intelligence', 'Key Vault'],
      },
      {
        client: 'Link Logistics (Blackstone)',
        project: 'Legal Contract Abstraction & RAG Platform',
        period: 'Nov 2024 – Feb 2025',
        highlight: 'Production RAG with LlamaIndex for automated abstraction of high-volume commercial real-estate leases.',
        bullets: [
          'Developed and optimized production RAG workflows using LlamaIndex and Azure OpenAI for automated legal contract abstraction.',
          'Built scalable ingestion pipelines handling high-volume commercial real estate leases, generating structured summaries and key clause extractions.',
        ],
        stack: ['LlamaIndex', 'Azure OpenAI', 'RAG', 'Python'],
      },
      {
        client: 'General Motors',
        project: 'Focused Multi-Agent Architecture & LangGraph',
        period: 'Sep 2024 – Nov 2024',
        highlight: 'Designed a hierarchical supervisor-agent topology with LangGraph state machines for GM engineering teams.',
        bullets: [
          'Architected a deterministic multi-agent system using LangGraph state machines and LangChain to coordinate autonomous workflows across automotive domains.',
          'Designed a hierarchical agent topology with a supervisor delegating to agents for multi-source retrieval, factual cross-verification, reasoning, and synthesis.',
          'Engineered cyclic graph execution, stateful memory persistence, and dynamic tool routing, preventing infinite loops and ensuring resilient execution.',
          'Integrated Python multi-agent backends with Azure Bot Services and Azure Cognitive Search for context-aware conversational intelligence.',
        ],
        stack: ['LangGraph', 'LangChain', 'Python', 'Azure Bot Services', 'Azure Cognitive Search'],
      },
      {
        client: 'Con Edison & Southern California Edison',
        project: 'Edison GPT — Utility GRC AI Chatbots',
        period: 'Aug 2023 – Aug 2024',
        highlight: "Architected GRC knowledge-base chatbots with dynamic RAG over utility policy and compliance material.",
        bullets: [
          "Architected enterprise AI chatbots for Con Edison's Governance, Risk, and Compliance (GRC) knowledgebase using Python, Node.js, React, Azure OpenAI, and Azure Cognitive Search.",
          'Implemented dynamic RAG pipelines integrating utility whitepapers, policy materials, tone violation checks, and key compliance terms.',
        ],
        stack: ['Python', 'Node.js', 'React', 'Azure OpenAI', 'Azure Cognitive Search'],
      },
      {
        client: 'Three Stripes',
        project: 'GenAI DevOps Productivity Suite',
        period: 'Mar 2023 – Aug 2023',
        highlight: 'Helped build a GenAI productivity platform streamlining development, testing and QA workflows.',
        bullets: [
          'Contributed to a foundational GenAI productivity platform leveraging Azure OpenAI foundation models to streamline development, testing, and QA workflows.',
        ],
        stack: ['Azure OpenAI', 'GenAI'],
      },
      {
        client: 'CliftonLarsonAllen (CLA)',
        project: 'Audit & Financial Microservices',
        period: 'Feb 2023 – Mar 2023',
        highlight: 'Built backend microservices and REST APIs supporting audit, tax and consulting platforms.',
        bullets: [
          'Developed and optimized backend microservices and REST APIs using Node.js, MongoDB, Docker, and PostgreSQL supporting audit, tax, and consulting platforms.',
        ],
        stack: ['Node.js', 'MongoDB', 'PostgreSQL', 'Docker'],
      },
      {
        client: 'Where to Buy (WTB) – PriceSpider',
        project: 'Distributed Commerce Microservices',
        period: 'Nov 2020 – Jan 2023',
        highlight: 'Engineered high-concurrency Golang & Node.js microservices on Kubernetes for a global retail commerce platform.',
        bullets: [
          'Engineered and maintained distributed high-concurrency microservices (locate, wtb-api, data pipeline) in Golang and Node.js for a global retail commerce platform.',
          'Deployed containerized services to AWS using Docker and Kubernetes, ensuring high availability across high-traffic consumer brand portals.',
          'Implemented monitoring with Telegraf, InfluxDB, and Grafana to track API latency, throughput, and service health; built UI analytics in React.',
        ],
        stack: ['Golang', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'Grafana', 'InfluxDB', 'React'],
      },
    ],
  },
  {
    company: 'Ace Turtle Services Ltd',
    role: 'Software Developer / Product Developer',
    period: 'Feb 2020 – Nov 2020',
    location: 'Bengaluru, India',
    engagements: [
      {
        client: 'Rubicon 3',
        project: 'Omnichannel Retail Enterprise Platform & AWS Data Lake',
        period: 'Feb 2020 – Nov 2020',
        highlight: 'Architected a serverless AWS data lake and real-time Kinesis streaming for an omnichannel retail platform.',
        bullets: [
          'Developed core frameworks and microservices using Node.js, Express, Restify, and MongoDB for distributed inventory, catalogs, orders, and logistics.',
          'Architected serverless data lake and analytics on AWS using Lambda, API Gateway, SQS, Glue, Athena, S3, and DynamoDB for large-scale ETL.',
          'Engineered real-time streaming pipelines with AWS Kinesis and Kinesis Analytics; built responsive admin interfaces in Angular.',
        ],
        stack: ['Node.js', 'Express', 'MongoDB', 'AWS Lambda', 'Kinesis', 'Glue', 'Athena', 'Angular'],
      },
    ],
  },
  {
    company: 'AuctionSoftware.com (DevelopScripts LLC)',
    role: 'Software Development Engineer (Full-Stack)',
    period: 'Aug 2018 – Feb 2020',
    location: 'Chennai, India',
    engagements: [
      {
        client: 'Mazzady, Sea Dwelling, BlazeBite & Ideal Floor',
        project: 'E-Commerce, Live Bidding Platforms & Warehouse Management',
        period: 'Aug 2018 – Feb 2020',
        highlight: 'Built live bidding engines, a warehouse management system and a Magento-to-MERN migration end to end.',
        bullets: [
          'Mazzady & auction engines: scalable bidding platforms supporting Forward, Reverse, and Penny auctions using Node.js, Express, Sequelize, MySQL, and React, with Stripe and PayPal payments.',
          'Sea Dwelling WMS: end-to-end warehouse and order lifecycle app with real-time Socket.io modules, REST APIs for iOS clients, and ShipStation shipping automation.',
          'BlazeBite & Ideal Floor: food ordering modules with Node.js, Angular, MongoDB, Docker, and Stripe; full migration of an interior design store from Magento to the MERN stack.',
        ],
        stack: ['Node.js', 'React', 'Redux', 'Angular', 'MySQL', 'MongoDB', 'Socket.io', 'Stripe'],
      },
    ],
  },
]
