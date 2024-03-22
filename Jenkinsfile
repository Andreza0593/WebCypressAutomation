pipeline {
    agent {
        docker {
            // Use a imagem Docker do Jenkins
            image 'jenkins/jenkins:latest'
            // Defina as opções de execução do contêiner Docker, se necessário
            args '-v /var/run/docker.sock:/var/run/docker.sock' 
        }
    }
    stages {
        stage('Build') {
            steps {
                // Comandos de build, se necessário
            }
        }
        stage('Test') {
            steps {
                // Comandos para executar os testes Cypress dentro do contêiner Docker
                sh 'npm run test'
            }
        }
        // Outros estágios do pipeline, se necessário
    }
    post {
        always {
            // Comandos para limpeza ou pós-processamento, se necessário
        }
    }
}
