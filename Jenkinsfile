pipeline {
    agent any
    
    stages {
        stage('Start') {
            steps {
                echo '分支为 test'
            }
        }
        stage('Build') {
            steps {
                sh "yarn"
                sh "cnpm run build"
                echo "构建成功"
            }
        }
    }
}