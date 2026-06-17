/* =====================================================================
 *  CV DATA  —  Wanxiang Yu
 *  Exported from admin.html. Overwrite this file and push to update the live CV.
 * ===================================================================== */
window.CV_DATA = {
  "basics": {
    "name": "Wanxiang Yu",
    "headline": "",
    "email": "onexiangg.yu@gmail.com",
    "phone": "19815840515",
    "github": "",
    "website": "",
    "location": ""
  },
  "summary": "",
  "interests": [
    "需要按照老师修改"
  ],
  "education": [
    {
      "school": "Nankai University",
      "degree": "M.Eng. in Software Engineering",
      "location": "Tianjin, China",
      "date": "2024 – 2027",
      "details": [
        "Advisor: Prof. Yuzhi Zhang",
        "GPA: X.XX / 4.0  (Rank X / N, top X%)",
        "Coursework: Machine Learning, Distributed Systems, Algorithms, …（选择一些成绩好的课）"
      ]
    },
    {
      "school": "Nankai University",
      "degree": "B.Eng. in Software Engineering",
      "location": "Tianjin, China",
      "date": "2020 – 2024",
      "details": [
        "GPA: X.XX / 4.0"
      ]
    }
  ],
  "publications": [
    {
      "authors": "Bin Lu, Wanxiang Yu, Haolin Wang, Jiayi Zhao, Yuzhi Zhang, and Rui Chen",
      "me": "Wanxiang Yu",
      "title": "CoMRA: A Framework for Automated Code Migration via Retrieval-Augmented Generation and Multi-Agent Collaboration",
      "venue": "SANER 2026 CCF-B",
      "year": "2026",
      "doi": "10.1109/SANER67736.2026.00022",
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
      "org": "Shopee(China)",
      "role": "AI Platform Engineering Intern",
      "location": "Beijing",
      "date": "Jun 2025 – May 2026",
      "summary": "Built core backend for Astrolabe, the internal ML experiment-management platform, and independently owned modules of the LLM Gateway (unified enterprise LLM API gateway).",
      "groups": [
        {
          "name": "ML Training Platform (Astrolabe / Compass-Tuning)",
          "bullets": [
            "Designed and built the Megatron training Docker image and a 6-stage pipeline (download → convert → train → export → upload → cleanup) supporting multi-node, multi-GPU distributed SFT/CPT/LoRA training.",
            "Implemented a RankCoordinator using a strategy-pattern execution model (RANK_0_ONLY / ALL_RANKS / RANK_0_IF_SINGLE_MP) and a lightweight file-based barrier over shared storage for inter-node sync, with a 2-hour timeout guard for 70B+ model downloads — eliminating deadlocks without extra message-queue infra.",
            "Built real-time log streaming + LLM-powered failure diagnosis: bridged AIS Pod-log WebSocket → SSE in FastAPI and streamed LLM analysis via a thread-pool/queue, producing structured root-cause and actionable fixes.",
            "Designed a layered config-validation system (25+ hard constraints, 6 warnings, 5 hints) for Megatron YAML configs to reject invalid jobs before GPU allocation, saving wasted compute."
          ]
        },
        {
          "name": "LLM Gateway — Prompts Module & Pricing Agent (independent owner)",
          "bullets": [
            "Built an end-to-end AI prompt-management service (data model, RESTful API, versioning, dual-format rendering) from scratch in Go (GORM); ensured correctness/perf via transactional consistency, optimistic version allocation with 409-retry, Redis caching + cursor pagination, and batch queries cutting list calls from 2N+1 → 3.",
            "Built an autonomous pricing agent (Playwright + ReAct loop) that scrapes vendors' official pricing pages and syncs production MDX docs, with a multi-layer anti-hallucination system (closed-set whitelist prompting, code-level validation, temperature=0, source-text verification, 2-round self-correction with rollback) guaranteeing every published price is source-traceable."
          ]
        }
      ]
    },
    {
      "org": "Tencent (Weishi Product Center)",
      "role": "Recommendation Architecture / Ad Engineering Intern",
      "location": "Beijing",
      "date": "May 2026 – Sep 2026",
      "summary": "Worked on the in-feed ad monetization recall & re-ranking (mixed-ranking) stack across three production services (C++ / Go on the tRPC framework).",
      "groups": [
        {
          "name": "",
          "bullets": [
            "Contributed to advert_ips, the ad recall & mixed-ranking decision engine: developed DAG operators (ispine/didagle) for SSP ad recall, user-feature extraction, and rule-driven slot strategy (ad first-position / interval / frequency control).",
            "Worked on the policy service's re-ranking pipeline — a Handler-based chain-of-responsibility flow covering multi-objective scoring, weighting, ranking, AMS eCPM re-estimation, frequency control, and eCPM-twiddle filtering; fusion coefficients computed per-user via an Evolution-Strategy (ES) model with graceful fallback.",
            "Contributed to the Supply Side Platform (SSP) service (Go/tRPC): DAG-orchestrated request filtering → AMS recall → ad filtering → slot allocation, driven by an mdb rule engine with hot-reloadable configs (Rainbow config center) across scenes."
          ]
        }
      ]
    }
  ],
  "skills": [
    {
      "category": "Languages",
      "items": "Go,Python,C++"
    },
    {
      "category": "ML / LLM",
      "items": "Megatron, PyTorch, RAG, multi-agent systems, ReAct, prompt engineering"
    },
    {
      "category": "Systems / Infra",
      "items": "Docker, Redis, MySQL, Kafka, RPC"
    },
    {
      "category": "Tools",
      "items": "Git, Linux, LaTeX"
    }
  ],
  "honors": [
    "Awards: [Scholarships / Competitions / Honors]",
    "Languages: Chinese (native); English — TOEFL/IELTS [score], GRE [score]"
  ]
};
