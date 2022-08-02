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
                yarn
                cnpm run build
                echo "构建成功"
            }
        }
    }
}