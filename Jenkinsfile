pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh './node_modules/.bin/cypress run'
            }
        }
    }

    post {
        always {
            junit 'cypress/results/*.xml'
        }
    }
}
