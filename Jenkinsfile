pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/DeviPothula/basic_node_app', branch: 'master'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Start Application') {
            steps {
                sh 'node server.js'
            }
        }
    }

    post {
        always {
            emailext (
                subject: "Jenkins Build: ${currentBuild.fullDisplayName}",
                body: """<p>Build Details:</p>
                         <ul>
                           <li>Status: ${currentBuild.currentResult}</li>
                           <li>Project: ${env.JOB_NAME}</li>
                           <li>Build Number: ${env.BUILD_NUMBER}</li>
                           <li>Build URL: <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></li>
                         </ul>""",
                recipientProviders: [[$class: 'DevelopersRecipientProvider']],
                to: 'your-email@example.com',
                mimeType: 'text/html'
            )
        }
    }
}
