pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                // Mensagem que será escrita no console do Jenkins
                echo 'Escrevendo no arquivo de log...'
                sh 'npm install'
                

                
                
            }
        }
        stage('Run Tests') {
            steps {
                sh './node_modules/.bin/npx cypress run'
            }
        }
    }






    post {
        always {
            junit 'cypress/results/*.xml'
        }
    }
}
