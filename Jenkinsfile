pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // Clone the code from the GitHub repository
                git url: 'https://github.com/DeviPothula/basic_node_app', branch: 'master'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Install dependencies
                sh 'npm install'
            }
        }

        stage('Start Application') {
            steps {
                // Start the Node.js application
                sh 'node server.js'
            }
        }
    }
}
