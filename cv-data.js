/* =====================================================================
 *  CV DATA  —  Wanxiang Yu  (default / seed content)
 *  This is the initial data the live editor (index.html) loads on first
 *  visit. After that, edits are saved in the browser (localStorage) and
 *  can be backed up via "导出 JSON". To change the built-in default, edit
 *  this file. The editor also supports: avatar upload, custom sections,
 *  show/hide sections, reorder, JSON import/export, and Save-as-PDF.
 * ===================================================================== */
window.CV_DATA = {
  "basics": {
    "name": "Wanxiang Yu",
    "headline": "M.Eng. Student in Software Engineering, Nankai University",
    "email": "onexiangg.yu@gmail.com",
    "phone": "19815840515",
    "github": "",
    "website": "https://ywx20020114.github.io/phd-cv",
    "location": ""
  },
  "summary": "",
  "interests": [
    "LLM for Software Engineering",
    "Code Intelligence & Automated Code Migration",
    "Retrieval-Augmented Generation (RAG)",
    "LLM-based Multi-Agent Systems"
  ],
  "education": [
    {
      "school": "Nankai University",
      "degree": "M.Eng. in Software Engineering",
      "location": "Tianjin, China",
      "date": "2024 – 2027",
      "details": [
        "Advisor: Prof. Yuzhi Zhang",
        "GPA: — / 4.0",
        "Selected Coursework: Machine Learning, Algorithms, Discrete Mathematics"
      ]
    },
    {
      "school": "Nankai University",
      "degree": "B.Eng. in Software Engineering",
      "location": "Tianjin, China",
      "date": "2020 – 2024",
      "details": [
        "GPA: — / 4.0"
      ]
    }
  ],
  "publications": [
    {
      "authors": "Bin Lu, Wanxiang Yu, Haolin Wang, Jiayi Zhao, Yuzhi Zhang, and Rui Chen",
      "me": "Wanxiang Yu",
      "title": "CoMRA: A Framework for Automated Code Migration via Retrieval-Augmented Generation and Multi-Agent Collaboration",
      "venue": "SANER 2026 (CCF-B)",
      "year": "to appear",
      "doi": "",
      "tag": "",
      "bullets": [
        "Proposed CoMRA, combining retrieval-augmented generation (RAG) for knowledge-enhanced code understanding with a multi-agent workflow for coordinated task execution.",
        "Achieved 98% conversion accuracy on a Qt4→Qt5 benchmark of 194 independently compilable programs, substantially outperforming general-purpose LLM baselines (56–84%).",
        "Validated cross-ecosystem generalization via Python 2→3 and Java 8→17 migration case studies.",
        "As primary contributor and main implementer: designed the detection/migration/verification multi-agent workflow with a compile–feedback–repair closed loop, built the RAG migration knowledge base, and constructed the evaluation benchmark and experiments."
      ]
    }
  ],
  "research": [],
  "experience": [
    {
      "org": "Shopee (China)",
      "role": "AI Platform Engineering Intern",
      "location": "Beijing",
      "date": "Jun 2025 – May 2026",
      "summary": "",
      "groups": [
        {
          "name": "LLM Training Platform (Compass Admin)",
          "bullets": [
            "Designed and built a Megatron training image and a 6-stage distributed pipeline (download → convert → train → export → upload → cleanup) supporting multi-node, multi-GPU SFT/CPT/LoRA training of large models.",
            "Designed a layered configuration-validation system that rejects invalid training jobs before GPU allocation, reducing wasted compute on large-scale runs."
          ]
        },
        {
          "name": "LLM Gateway — Prompt Management & Pricing Agent",
          "bullets": [
            "Built a prompt lifecycle-management service (visual orchestration, versioning, multi-format rendering) to support rapid prototyping and deployment of in-house LLM applications.",
            "Studied hallucination control in LLM agents: built an autonomous pricing agent (Playwright + ReAct) and a multi-layer anti-hallucination scheme (whitelist-constrained prompting, source-text verification, self-correction with rollback) that makes every produced value traceable to its source."
          ]
        }
      ]
    },
    {
      "org": "Tencent",
      "role": "Recommendation Architecture Intern",
      "location": "Beijing",
      "date": "May 2026 – Sep 2026",
      "summary": "",
      "groups": [
        {
          "name": "",
          "bullets": [
            "Onboarded the short-drama secondary-page traffic to the mixed-ranking service, enabling blended ranking of ads and organic content in a new recommendation scenario.",
            "Worked within the mixed-ranking fusion stage, where per-user ad–content blending coefficients are produced by an Evolution-Strategy model; implemented the fallback-to-default-weights path for cold-start and model-miss cases to keep ranking robust.",
            "Developed slot-allocation and filtering strategies in the Supply-Side Platform (SSP) service and added new features into the recall/ranking flow to improve ad targeting."
          ]
        }
      ]
    }
  ],
  "skills": [
    {
      "category": "Languages",
      "items": "Python, Go, C++"
    },
    {
      "category": "ML / LLM",
      "items": "PyTorch, Megatron, RAG, multi-agent systems, ReAct, prompt engineering"
    },
    {
      "category": "Systems / Tools",
      "items": "Docker, Redis, MySQL, Git, Linux, LaTeX"
    }
  ],
  "honors": [
    "Awards: Nankai University Gongneng Scholarship; Nankai University Sports & Arts Scholarship",
    "Languages: Chinese (native); English — IELTS (in preparation)"
  ],
  "avatar": "",
  "headerCenter": true,
  "custom": [],
  "hidden": {
    "summary": false,
    "research": false,
    "skills": true
  }
};
