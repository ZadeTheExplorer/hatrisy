<template>
  <div>
    <div class="page-header clear-filter text_align-center" filter-color="orange">
      <parallax
          class="page-header-image"
          style="background-image:url('img/cowboy-background.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="photo-container">
          <img src="img/sy-avatar.png" width="300" height="300" alt="Patrick Ha"/>
        </div>
        <h3 class="title">Patrick Ha</h3>
        <p/>
        <p class="category">Analytics Engineer</p>
        <p class="category">~ Currently working at Transmax, Brisbane ~</p>
      </div>
    </div>
    <div class="section cv-wrapper">
      <!-- Page Content-->
      <div class="container-fluid p-0">
        <!-- About-->
        <section class="resume-section" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0">
              Sy Tri
              <span class="text-primary">Ha</span>
            </h1>
            <div class="subheading mb-5">
              Brisbane, QLD · (+61) 0481112771 ·
              <a href="mailto:hatrisy@gmail.com">hatrisy@gmail.com</a>
            </div>
            <p class="lead mb-5">Detail-oriented Analytics Engineer with over 4 years of experience specializing in
              end-to-end data pipeline development, cloud data warehousing, and complex data modeling. Proven track
              record of translating ambiguous business requirements into high-impact, actionable insights for
              stakeholders using tools like DBT, Snowflake, Databricks, and Tableau. Deep experience in event-driven
              architecture, data transformation, and partnering with business domains to drive data-based decisioning
              and enhance platform efficiency.</p>
            <div class="social-icons">
              <a class="social-icon" href="https://www.linkedin.com/in/sy-tri-ha/" target="_blank">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="https://github.com/ZadeTheExplorer" target="_blank">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </section>
        <hr class="m-0"/>
        <!-- Experience-->
        <section class="resume-section" id="experience">
          <div class="resume-section-content">
            <h2 class="mb-5">Experience</h2>

            <!-- Transmax -->
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Data Engineer</h3>
                <div class="subheading mb-3">Transmax · Brisbane, QLD, Australia</div>
                <ul>
                  <li>Strengthened platform reliability and significantly reduced costs by diagnosing and resolving complex, long-standing production issues in event-data processing, eliminating duplicate records to improve metric accuracy and proactively optimizing DLT pipelines.</li>
                  <li>Enabled strategic business decisions for new product initiatives by developing a stakeholder-facing interactive cost-prediction tool in Python, and delivering a successful POC for a new 'In-app reporting' feature using Databricks Lakebase.</li>
                  <li>Hardened and scaled the core Databricks platform for new market expansion by implementing robust data clustering, automated high-availability for clusters, and enabling critical AIT testing for new customer integrations — successfully preparing the system for the USA market.</li>
                  <li>Researched and demonstrated next-generation Databricks features including VARIANT data type, Lakebase functionality, and DLT event log for enhanced observability.</li>
                </ul>
              </div>
              <div class="flex-shrink-0"><span class="text-primary">Nov 2024 – Present</span></div>
            </div>

            <!-- Cognizant Servian -->
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Data Consultant</h3>
                <div class="subheading mb-3">Cognizant Servian · Brisbane, Australia</div>
                <ul>
                  <li>Contributed to internal GCP Dataops 2-day Bootcamp by designing material, building demo products, and preparing tutorials on applying DevOps philosophy to data projects.</li>
                  <li>Built a framework for automatically generating DBT DAGs in Airflow and organised a company-wide learning session on DBT–Airflow integration.</li>
                  <li>Advised on DBT Maturity Assessment and Uplift for Western Power by reviewing their current DBT implementation in the Mid-term Forecast project to improve scalability, operations, and governance.</li>
                </ul>

                <div class="engagement mb-3">
                  <h5 class="mb-0">Analytics Engineer — Dept. of Transport and Main Roads</h5>
                  <span class="text-primary small">Feb 2024 – Oct 2024</span>
                  <ul class="mt-2">
                    <li>Designed and implemented a data pipeline to modernise annual and quarterly Excel reports by developing a Snowflake-based data model and visualising dashboards in Tableau.</li>
                    <li>Built an automated data pipeline to replace manual reporting processes, creating Snowflake data models integrated with Alteryx and enabling Excel export via a Snowflake Streamlit app.</li>
                  </ul>
                </div>

                <div class="engagement mb-3">
                  <h5 class="mb-0">Data Platform Engineer — University of the Sunshine Coast</h5>
                  <span class="text-primary small">Apr 2023 – Sep 2023</span>
                  <ul class="mt-2">
                    <li>Architected a comprehensive event streaming pipeline using Azure Synapse, Azure Data Factory, and Azure Functions App to capture transaction data into Segment CDP for enhanced marketing analytics.</li>
                    <li>Contributed to solution design, data-handling capabilities, and user training for application handover.</li>
                  </ul>
                </div>

                <div class="engagement">
                  <h5 class="mb-0">Data Engineer — Queensland Police Service</h5>
                  <span class="text-primary small">Aug 2022 – Mar 2023</span>
                  <ul class="mt-2">
                    <li>Architected and developed a document extraction pipeline using AWS Textract in Airflow with SNS &amp; SQS for asynchronous API calling, saving up to 200% of manual officer processing time.</li>
                    <li>Maintained and enhanced data processing pipelines with SQL optimisations, bash script augmentations in OpenSearch, and centralised distributed AWS RDS instances into a data lake.</li>
                    <li>Implemented incremental load for structured/unstructured data from AWS S3 to AWS RDS and expanded the data lake with transform models to support Image Processing &amp; Face Recognition ML models.</li>
                  </ul>
                </div>
              </div>
              <div class="flex-shrink-0"><span class="text-primary">May 2022 – Nov 2024</span></div>
            </div>

            <!-- One Mount Group -->
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Data Analytics Engineer</h3>
                <div class="subheading mb-3">One Mount Group · Hanoi, Vietnam</div>
                <ul>
                  <li>Optimised migrated data validation time by ~250% by automating validation of Oracle data migrated to Google Cloud Storage using Airflow to schedule a Spark Operator on GKE for record-count and content verification.</li>
                  <li>Designed and implemented an end-to-end ETL pipeline for workplace efficiency analytics using Jira and GitLab APIs — with Airflow for ingestion, DBT for transformation, Dremio for serving, and Superset for visualisation.</li>
                  <li>Applied DBT framework to build financial accounting reports for large-scale datasets (80M+ records) of SAP module on a GCP-based data lake.</li>
                </ul>
              </div>
              <div class="flex-shrink-0"><span class="text-primary">Aug 2021 – Mar 2022</span></div>
            </div>

            <!-- CMC Global -->
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">Software Engineer</h3>
                <div class="subheading mb-3">CMC Global · Hanoi, Vietnam</div>
                <ul>
                  <li>Developed an e-BackOffice system to manage human resources &amp; projects using Nuxt.js and Django, with a MySQL relational database.</li>
                  <li>Built a responsive website in Vue.js and Django to help customers generate case studies and create training scripts for a Machine Learning chatbot.</li>
                </ul>
              </div>
              <div class="flex-shrink-0"><span class="text-primary">Jul 2020 – Feb 2021</span></div>
            </div>

          </div>
        </section>
        <hr class="m-0"/>
        <!-- Education-->
        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">Queensland University of Technology (QUT)</h3>
                <div class="subheading mb-3">Bachelor of Information Technology (Computer Science)</div>
                <p>GPA: 6.0 · Dean's List</p>
                <p>Relevant coursework: Algorithm and Complexity, Software Development, Cloud Computing, AI, ML</p>
              </div>
              <div class="flex-shrink-0"><span class="text-primary">Oct 2018 – Nov 2022</span></div>
            </div>
          </div>
        </section>
        <hr class="m-0"/>
        <!-- Skills-->
        <section class="resume-section" id="skills">
          <div class="resume-section-content">
            <h2 class="mb-5">Skills</h2>

            <div class="subheading mb-3">Languages</div>
            <ul class="list-inline dev-icons">
              <li class="list-inline-item"><img src="https://img.icons8.com/color/64/000000/python.png" title="Python"/></li>
              <li class="list-inline-item"><img src="https://img.icons8.com/color/64/000000/javascript.png" title="JavaScript"/></li>
              <li class="list-inline-item"><img src="https://img.icons8.com/color/64/000000/sql.png" title="SQL"/></li>
            </ul>

            <div class="subheading mb-3">Cloud Platforms</div>
            <ul class="list-inline dev-icons">
              <li class="list-inline-item"><img src="https://img.icons8.com/color/64/000000/amazon-web-services.png" title="AWS"/></li>
              <li class="list-inline-item"><img src="https://img.icons8.com/color/64/000000/google-cloud.png" title="GCP"/></li>
              <li class="list-inline-item"><img src="https://img.icons8.com/color/64/000000/azure-1.png" title="Azure"/></li>
            </ul>

            <div class="subheading mb-3">Data Platforms & Tools</div>
            <ul class="fa-ul mb-3">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Databricks (DLT, Lakebase, VARIANT)</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Snowflake (Streamlit, SnowPro Certified)</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>DBT Framework (DBT Certified Developer)</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Apache Airflow · Apache Spark</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Tableau · PowerBI · Apache Superset · Dremio</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Twilio Segment CDP</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Terraform · Git</li>
            </ul>

          </div>
        </section>
        <hr class="m-0"/>
        <!-- Interests-->
        <section class="resume-section" id="interests">
          <div class="resume-section-content">
            <h2 class="mb-5">Interests</h2>
            <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid
              skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free
              climbing, and kayaking.</p>
            <p class="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television
              shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology
              advancements in the front-end web development world.</p>
          </div>
        </section>
        <hr class="m-0"/>
        <!-- Awards-->
        <section class="resume-section" id="awards">
          <div class="resume-section-content">
            <h2 class="mb-5">Awards & Certifications</h2>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li"><i class="fas fa-certificate text-warning"></i></span>
                AWS Certified Solutions Architect – Associate
              </li>
              <li>
                <span class="fa-li"><i class="fas fa-certificate text-warning"></i></span>
                DBT Certified Developer
              </li>
              <li>
                <span class="fa-li"><i class="fas fa-certificate text-warning"></i></span>
                Databricks Certified Data Engineer Associate
              </li>
              <li>
                <span class="fa-li"><i class="fas fa-certificate text-warning"></i></span>
                Snowflake SnowPro Core Certification
              </li>
              <li>
                <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                QUT Dean's List
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'cv-page',
  bodyClass: 'cv-page',
  components: {
  }
};

</script>
<style>
h1,
h2,
h3,
h4,
h5,
h6 {
  text-transform: uppercase;
}

h1 {
  font-size: 5em;
}

.cv-wrapper {
  background: rgb(255, 230, 255);
  background: linear-gradient(126deg, rgba(255, 230, 255, 1) 0%, rgba(255, 230, 124, 1) 100%);
}

.text-primary {
  color: blue !important;
  padding-bottom: 0 !important;
}

a.text-primary:hover, a.text-primary:focus {
  color: #824027 !important;
}

p.lead {
  font-size: 1.15rem;
  font-weight: 400;
}

.subheading {
  font-family: "Saira Extra Condensed", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.5rem;
}

#sideNav .navbar-nav .nav-item .nav-link {
  font-weight: 800;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
}

#sideNav .navbar-toggler:focus {
  outline-color: #d48a6e;
}

@media (min-width: 992px) {
  #sideNav {
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 17rem;
    height: 100vh;
  }

  #sideNav .navbar-brand {
    display: flex;
    margin: auto auto 0;
    padding: 0.5rem;
  }

  #sideNav .navbar-brand .img-profile {
    max-width: 10rem;
    max-height: 10rem;
    border: 0.5rem solid rgba(255, 255, 255, 0.2);
  }

  #sideNav .navbar-collapse {
    display: flex;
    align-items: flex-start;
    flex-grow: 0;
    width: 100%;
    margin-bottom: auto;
  }

  #sideNav .navbar-collapse .navbar-nav {
    flex-direction: column;
    width: 100%;
  }

  #sideNav .navbar-collapse .navbar-nav .nav-item {
    display: block;
  }

  #sideNav .navbar-collapse .navbar-nav .nav-item .nav-link {
    display: block;
  }
}

.social-icons .social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 3.5rem;
  width: 3.5rem;
  background-color: #495057;
  color: #fff;
  border-radius: 100%;
  font-size: 1.5rem;
  margin-right: 1.5rem;
}

.social-icons .social-icon:last-child {
  margin-right: 0;
}

.social-icons .social-icon:hover {
  background-color: #bd5d38;
}

.dev-icons {
  font-size: 3rem;
}

.engagement {
  border-left: 3px solid #bd5d38;
  padding-left: 1rem;
  margin-top: 1.5rem;
}

section.resume-section {
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
  max-width: 75rem;
}

section.resume-section .resume-section-content {
  width: 90%;
  margin: auto;
}

@media (min-width: 768px) {
  section.resume-section {
    min-height: 100vh;
  }
}

@media (min-width: 992px) {
  section.resume-section {
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
}
</style>
