<template>
  <div class="projects-page">
    <div class="page-header page-header-small" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg1.jpg')"
      ></parallax>
      <div class="container">
        <h1 class="title">Projects</h1>
        <p class="category">A showcase of things I've built</p>
      </div>
    </div>

    <div class="section">
      <div class="container">

        <!-- Data Engineering -->
        <h3 class="section-title">Data Engineering</h3>
        <div class="row">

          <div class="col-md-4" v-for="project in dataProjects" :key="project.title">
            <div class="project-card card card-raised">
              <div class="card-header card-header-primary">
                <i :class="project.icon + ' project-icon'"></i>
                <h4 class="card-title">{{ project.title }}</h4>
                <p class="card-category">{{ project.context }}</p>
              </div>
              <div class="card-body">
                <p>{{ project.description }}</p>
                <div class="tech-tags mt-3">
                  <span
                    class="badge badge-pill badge-tag"
                    v-for="tag in project.tags"
                    :key="tag"
                  >{{ tag }}</span>
                </div>
              </div>
              <div class="card-footer" v-if="project.link">
                <a :href="project.link" target="_blank" class="btn btn-sm btn-primary">
                  <i class="fab fa-github"></i> View on GitHub
                </a>
              </div>
            </div>
          </div>

        </div>

        <!-- Software Engineering -->
        <h3 class="section-title mt-5">Software Engineering</h3>
        <div class="row">

          <div class="col-md-4" v-for="project in softwareProjects" :key="project.title">
            <div class="project-card card card-raised">
              <div class="card-header card-header-info">
                <i :class="project.icon + ' project-icon'"></i>
                <h4 class="card-title">{{ project.title }}</h4>
                <p class="card-category">{{ project.context }}</p>
              </div>
              <div class="card-body">
                <p>{{ project.description }}</p>
                <div class="tech-tags mt-3">
                  <span
                    class="badge badge-pill badge-tag"
                    v-for="tag in project.tags"
                    :key="tag"
                  >{{ tag }}</span>
                </div>
              </div>
              <div class="card-footer" v-if="project.link">
                <a :href="project.link" target="_blank" class="btn btn-sm btn-info">
                  <i class="fab fa-github"></i> View on GitHub
                </a>
              </div>
            </div>
          </div>

        </div>

        <!-- GitHub CTA -->
        <div class="row mt-5">
          <div class="col-12 text-center">
            <p class="lead">Want to see more?</p>
            <a
              href="https://github.com/ZadeTheExplorer"
              target="_blank"
              class="btn btn-lg btn-github"
            >
              <i class="fab fa-github"></i> View all on GitHub
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'projects-page',
  bodyClass: 'projects-page',
  data() {
    return {
      dataProjects: [
        {
          title: 'Workplace Efficiency Analytics',
          context: 'One Mount Group · 2021–2022',
          icon: 'fas fa-chart-line',
          description:
            'End-to-end ETL pipeline enabling teams to analyse and monitor workplace efficiency using Jira & GitLab API data. Ingestion via Airflow, transformation with DBT, serving on Dremio, and visualised in Apache Superset.',
          tags: ['Airflow', 'DBT', 'Dremio', 'Superset', 'GCP', 'Python'],
          link: null
        },
        {
          title: 'Document Extraction Pipeline',
          context: 'Queensland Police Service · 2022–2023',
          icon: 'fas fa-file-alt',
          description:
            'Automated document extraction pipeline using AWS Textract with asynchronous processing via SNS & SQS in Airflow, reducing officer manual processing time by 200%. Also expanded the data lake with transform models supporting Image Processing & Face Recognition ML models.',
          tags: ['AWS Textract', 'Airflow', 'SNS', 'SQS', 'S3', 'RDS'],
          link: null
        },
        {
          title: 'Events Streaming Pipeline',
          context: 'University of the Sunshine Coast · 2023',
          icon: 'fas fa-stream',
          description:
            'Comprehensive event streaming architecture capturing application transaction data and analytic DWH data into Segment CDP to enhance marketing analysis strategy. Built on Azure Synapse, Azure Data Factory, and Azure Functions App.',
          tags: ['Azure Synapse', 'Azure Data Factory', 'Azure Functions', 'Segment CDP'],
          link: null
        },
        {
          title: 'Annual Reporting Modernisation',
          context: 'Dept. of Transport & Main Roads · 2024',
          icon: 'fas fa-database',
          description:
            'Modernised annual and quarterly Excel reports by designing a Snowflake-based data model and building Tableau dashboards. Also automated manual reporting processes by integrating Snowflake models with Alteryx and a Streamlit export app.',
          tags: ['Snowflake', 'Tableau', 'Alteryx', 'Streamlit', 'SQL'],
          link: null
        },
        {
          title: 'Cost Prediction Tool',
          context: 'Transmax · 2024–Present',
          icon: 'fas fa-calculator',
          description:
            'Interactive stakeholder-facing cost-prediction tool built in Python to enable strategic business decisions for new product initiatives. Delivered alongside a successful Databricks Lakebase POC for an in-app reporting feature.',
          tags: ['Python', 'Databricks', 'Lakebase', 'DLT'],
          link: null
        }
      ],
      softwareProjects: [
        {
          title: 'hatrisy — Portfolio Website',
          context: 'Personal Project · 2020–Present',
          icon: 'fas fa-laptop-code',
          description:
            'This portfolio website built with Vue.js 2 on the Now UI Kit design system. Features a resume/CV page, project showcase, and responsive UI components.',
          tags: ['Vue.js', 'Bootstrap 4', 'SCSS', 'Express.js'],
          link: 'https://github.com/ZadeTheExplorer/hatrisy'
        },
        {
          title: 'e-BackOffice System',
          context: 'CMC Global · 2020–2021',
          icon: 'fas fa-users-cog',
          description:
            'Responsive HR & project management web application for managing human resources and internal projects. Built with Nuxt.js on the frontend and Django on the backend, backed by a MySQL relational database.',
          tags: ['Nuxt.js', 'Django', 'MySQL', 'Python', 'JavaScript'],
          link: null
        },
        {
          title: 'ML Chatbot Training Tool',
          context: 'CMC Global · 2020–2021',
          icon: 'fas fa-robot',
          description:
            'Web application helping customers generate case studies and create training scripts for Machine Learning chatbots. Built with Vue.js frontend and Django REST backend.',
          tags: ['Vue.js', 'Django', 'Python', 'Machine Learning'],
          link: null
        }
      ]
    };
  }
};
</script>

<style scoped>
.page-header.page-header-small {
  min-height: 30vh;
  max-height: 300px;
}

.page-header .title {
  color: #fff;
  font-size: 3em;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.page-header .category {
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.1rem;
  margin-bottom: 0;
}

.section-title {
  font-weight: 700;
  text-transform: uppercase;
  border-left: 4px solid #f96332;
  padding-left: 0.75rem;
  margin-bottom: 1.5rem;
}

.project-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  border-radius: 8px;
  overflow: hidden;
}

.project-card .card-header {
  padding: 1.5rem;
  color: #fff;
  border-radius: 0 !important;
}

.card-header-primary {
  background: linear-gradient(60deg, #ab47bc, #7b1fa2);
}

.card-header-info {
  background: linear-gradient(60deg, #26c6da, #0097a7);
}

.project-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
  display: block;
  opacity: 0.9;
}

.project-card .card-title {
  color: #fff;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
}

.project-card .card-category {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.8rem;
  margin-bottom: 0;
  text-transform: none;
}

.project-card .card-body {
  flex: 1;
  padding: 1.25rem;
  font-size: 0.9rem;
  line-height: 1.6;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.badge-tag {
  background-color: #f0f0f0;
  color: #444;
  font-weight: 500;
  font-size: 0.75rem;
  padding: 0.35em 0.75em;
  border: 1px solid #ddd;
}

.project-card .card-footer {
  padding: 0.75rem 1.25rem;
  background: transparent;
  border-top: 1px solid #eee;
}

.btn-github {
  background-color: #24292e;
  color: #fff;
  border-color: #24292e;
}

.btn-github:hover {
  background-color: #3a3f45;
  color: #fff;
}
</style>
