pipeline {
    agent any  // Runs the pipeline on any available Jenkins agent

    environment {
        NODE_HOME = tool name: 'nodejs', type: 'ToolLocationNodeJS'  // Optional: Define Node.js tool path
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out the repository'
                checkout scm  // Clones your GitHub repository
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                script {
                    dir('client') {
                        // If your Vite project is inside the "client" folder, this is where the npm commands will run
                        sh 'npm install'  // For Linux/macOS
                        // For Windows: bat 'npm install'
                    }
                }
            }
        }

        stage('Build Project') {
            steps {
                echo 'Building the Vite Project...'
                script {
                    dir('client') {
                        sh 'npm run build'  // For Linux/macOS
                        // For Windows: bat 'npm run build'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the project...'
                // Add your deployment commands here (e.g., GitHub Pages, Netlify, Vercel, etc.)
            }
        }
    }

    post {
        success {
            echo 'Build and deployment succeeded!'
        }
        failure {
            echo 'Build or deployment failed.'
        }
    }
}
